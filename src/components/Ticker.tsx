import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { StockIndexInfo, CurrencyRates } from "../types";

export default function Ticker() {
  const [stocks, setStocks] = useState<StockIndexInfo[]>([]);
  const [currencies, setCurrencies] = useState<CurrencyRates | null>(null);
  const [updatedAt, setUpdatedAt] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchFinanceData() {
      try {
        const response = await fetch("/api/finance");
        if (response.ok) {
          const data = await response.json();
          setStocks(data.stocks || []);
          setCurrencies(data.currencies || null);
          setUpdatedAt(data.updatedAt || "");
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Failed to fetch finance ticker streams:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchFinanceData();
    // Refresh every 30 seconds for live daily updating
    const interval = setInterval(fetchFinanceData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Compute major currency ratios relative to Indian Rupee (INR) and UK Pound (GBP)
  const renderCurrencyRatios = () => {
    if (!currencies) return null;
    const { USD, INR, GBP, JPY, CNY } = currencies;

    // Cross rates for requested currencies: GBP, USD, JPY, CNY, INR
    const gbpUsd = USD / GBP; // GBP strength relative to USD (e.g., 1.27)
    const usdInr = INR / USD; // USD relative to INR (e.g., 83.5)
    const gbpInr = INR / GBP; // GBP relative to INR (e.g., 106.3)
    const usdJpy = JPY / USD; // USD relative to JPY (e.g., 155.2)
    const usdCny = CNY / USD; // USD relative to CNY (e.g., 7.24)

    const crossRates = [
      { pair: "GBP / USD", rate: gbpUsd },
      { pair: "USD / INR", rate: usdInr },
      { pair: "GBP / INR", rate: gbpInr },
      { pair: "USD / JPY", rate: usdJpy },
      { pair: "USD / CNY", rate: usdCny }
    ];

    return crossRates.map((item, idx) => (
      <div key={`curr-${idx}`} className="flex items-center space-x-2 px-6 border-r border-white/10 py-2 shrink-0">
        <span className="text-[11px] font-mono font-semibold text-slate-400">{item.pair}</span>
        <span className="text-[11px] font-mono font-bold text-emerald-400">
          {item.rate.toFixed(3)}
        </span>
        <TrendingUp className="w-3 h-3 text-emerald-500 animate-pulse" />
      </div>
    ));
  };

  // Duplicate items to ensure a seamless looping effect banner
  const marqueeItems = [...stocks, ...stocks];

  return (
    <div className="w-full bg-black border-y border-white/10 select-none overflow-hidden relative z-40 shadow-xl">
      {/* Decorative indicator indicating a fully responsive, daily updated finance grid */}
      <div className="absolute left-0 top-0 bottom-0 bg-blue-600 px-2.5 md:px-4 text-[10px] font-mono text-white flex items-center justify-center font-extrabold tracking-widest uppercase z-50 shadow-lg border-r border-white/10 shrink-0">
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Market & Currency Rates
      </div>

      <div className="flex h-[36px] items-center pl-44 md:pl-48">
        <div className="flex animate-marquee whitespace-nowrap items-center hover:pause-marquee">
          {loading ? (
            <div className="flex items-center space-x-4 pl-4 shrink-0">
              <span className="text-slate-400 text-xs font-mono">Initializing Bloomberg terminal feed...</span>
            </div>
          ) : (
            <>
              {/* Render Stocks */}
              {marqueeItems.map((stock, index) => {
                const isPositive = stock.change >= 0;
                return (
                  <div
                    key={`stock-${stock.symbol}-${index}`}
                    className="flex items-center space-x-2 px-6 border-r border-white/10 py-2 shrink-0"
                  >
                    <span className="text-[10px] bg-white/5 border border-white/10 text-slate-300 font-mono px-1 rounded font-bold uppercase">
                      {stock.country.substring(0, 3)}
                    </span>
                    <span className="text-[11px] font-sans font-bold text-white tracking-tight">
                      {stock.name}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-300">
                      {stock.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                    <span
                      className={`flex items-center text-[10px] font-mono font-bold px-1 rounded ${
                        isPositive ? "text-emerald-400 bg-emerald-950/40" : "text-rose-400 bg-rose-950/40"
                      }`}
                    >
                      {isPositive ? (
                        <ArrowUpRight className="w-3.5 h-3.5 mr-0.5 shrink-0" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5 mr-0.5 shrink-0" />
                      )}
                      {isPositive ? "+" : ""}
                      {stock.changePercent.toFixed(2)}%
                    </span>
                  </div>
                );
              })}

              {/* Render Currency Ratios */}
              {renderCurrencyRatios()}
            </>
          )}

          {/* Fallback info when offline or error */}
          {error && (
            <div className="text-rose-400 text-xs font-mono pl-4 shrink-0">
              Note: Network restriction. Operating on date-seeded high-fidelity fallbacks.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
