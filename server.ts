import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Enable JSON parsing
app.use(express.json());

// List of stock index symbols and metadata
interface StockIndex {
  symbol: string;
  name: string;
  country: string;
  basePrice: number;
}

const STOCKS_METADATA: StockIndex[] = [
  { symbol: "^GSPC", name: "S&P 500", country: "United States", basePrice: 5450.50 },
  { symbol: "^IXIC", name: "NASDAQ Composite", country: "United States", basePrice: 17750.20 },
  { symbol: "^NSEI", name: "NIFTY 50", country: "India", basePrice: 23520.40 },
  { symbol: "^BSESN", name: "BSE SENSEX", country: "India", basePrice: 77340.60 },
  { symbol: "^FTSE", name: "FTSE 100", country: "United Kingdom", basePrice: 8250.30 },
  { symbol: "^N225", name: "Nikkei 225", country: "Japan", basePrice: 38650.10 },
  { symbol: "^GDAXI", name: "DAX Performance", country: "Germany", basePrice: 18120.70 },
  { symbol: "^FCHI", name: "CAC 40", country: "France", basePrice: 7650.80 },
  { symbol: "000001.SS", name: "SSE Composite", country: "China", basePrice: 3020.15 },
  { symbol: "^HSI", name: "Hang Seng Index", country: "Hong Kong", basePrice: 18050.45 },
  { symbol: "^AXJO", name: "S&P/ASX 200", country: "Australia", basePrice: 7780.20 }
];

// Fallback currency rates relative to USD in case API is fail-safe
const FALLBACK_CURRENCIES = {
  USD: 1.0,
  INR: 83.45,
  GBP: 0.789,
  JPY: 157.65,
  CNY: 7.25,
  EUR: 0.932
};

// Simple server-side caching of results
let financeCache: {
  timestamp: number;
  data: any;
} | null = null;

const CACHE_DURATION_MS = 60 * 1000; // 1 minute cache in memory

async function fetchRealFinanceData() {
  const result: any = {
    stocks: [] as any[],
    currencies: {} as any,
    updatedAt: new Date().toISOString()
  };

  // 1. Fetch Currency exchange rates from completely free public endpoint
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (res.ok) {
      const payload = await res.json();
      if (payload && payload.rates) {
        result.currencies = {
          USD: payload.rates.USD || FALLBACK_CURRENCIES.USD,
          INR: payload.rates.INR || FALLBACK_CURRENCIES.INR,
          GBP: payload.rates.GBP || FALLBACK_CURRENCIES.GBP,
          JPY: payload.rates.JPY || FALLBACK_CURRENCIES.JPY,
          CNY: payload.rates.CNY || FALLBACK_CURRENCIES.CNY,
          EUR: payload.rates.EUR || FALLBACK_CURRENCIES.EUR,
        };
      }
    }
  } catch (err) {
    console.warn("Currency fetch error, using fallbacks:", err);
  }

  if (Object.keys(result.currencies).length === 0) {
    result.currencies = { ...FALLBACK_CURRENCIES };
  }

  // 2. Fetch stock indices from Yahoo Finance or fallback to high-fidelity simulated seeded price indices
  for (const item of STOCKS_METADATA) {
    let priceItem = {
      name: item.name,
      symbol: item.symbol,
      country: item.country,
      price: item.basePrice,
      change: 0.25,
      changePercent: 0.05,
      high: item.basePrice * 1.005,
      low: item.basePrice * 0.995,
      isRealTime: false
    };

    try {
      // Fetch Yahoo finance public chart data
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${item.symbol}?interval=1d&range=2d`;
      const yRes = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      });
      if (yRes.ok) {
        const payload = await yRes.json();
        const meta = payload?.chart?.result?.[0]?.meta;
        if (meta && typeof meta.regularMarketPrice === "number") {
          const currentPrice = meta.regularMarketPrice;
          const chartPreviousClose = meta.chartPreviousClose !== undefined ? meta.chartPreviousClose : currentPrice;
          const deltaPrice = currentPrice - chartPreviousClose;
          const decimalPercent = chartPreviousClose !== 0 ? (deltaPrice / chartPreviousClose) * 100 : 0;

          priceItem.price = parseFloat(currentPrice.toFixed(2));
          priceItem.change = parseFloat(deltaPrice.toFixed(2));
          priceItem.changePercent = parseFloat(decimalPercent.toFixed(2));
          priceItem.high = meta.regularMarketDayHigh ? parseFloat(meta.regularMarketDayHigh.toFixed(2)) : priceItem.price;
          priceItem.low = meta.regularMarketDayLow ? parseFloat(meta.regularMarketDayLow.toFixed(2)) : priceItem.price;
          priceItem.isRealTime = true;
        }
      }
    } catch (err) {
      // Silent error - fallback applies natively with high-fidelity random walk
    }

    // Generate seeded random walk parameters if no real-time Yahoo response
    // Seeded based on current date, so it's stable and updates daily
    if (!priceItem.isRealTime) {
      const todayString = new Date().toDateString();
      let seed = 0;
      for (let i = 0; i < todayString.length; i++) {
        seed += todayString.charCodeAt(i) * (i + 1);
      }
      for (let i = 0; i < item.symbol.length; i++) {
        seed += item.symbol.charCodeAt(i) * (i + 5);
      }
      
      const pseudoRandom = Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
      const percentageMovement = (pseudoRandom * 2.8) - 1.2; // Move between -1.2% and +1.6%
      const basePriceAdjusted = item.basePrice * (1 + (percentageMovement / 100));
      
      priceItem.price = parseFloat(basePriceAdjusted.toFixed(2));
      priceItem.change = parseFloat((item.basePrice * (percentageMovement / 100)).toFixed(2));
      priceItem.changePercent = parseFloat(percentageMovement.toFixed(2));
      priceItem.high = parseFloat((priceItem.price * 1.006).toFixed(2));
      priceItem.low = parseFloat((priceItem.price * 0.994).toFixed(2));
    }

    result.stocks.push(priceItem);
  }

  return result;
}

// REST route for finance data api with quick in-memory caching
app.get("/api/finance", async (req, res) => {
  try {
    const now = Date.now();
    if (financeCache && (now - financeCache.timestamp < CACHE_DURATION_MS)) {
      return res.json(financeCache.data);
    }

    const freshData = await fetchRealFinanceData();
    financeCache = {
      timestamp: now,
      data: freshData
    };

    res.json(freshData);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to retrieve financial metrics" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

async function runExpressAndVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operational on http://localhost:${PORT} [NODE_ENV=${process.env.NODE_ENV || 'development'}]`);
  });
}

runExpressAndVite().catch((error) => {
  console.error("Vite integration failure on Node express start:", error);
});
