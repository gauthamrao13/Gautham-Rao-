import { useState, useEffect } from "react";
import { TrendingUp, Landmark, FileSpreadsheet, ShieldCheck } from "lucide-react";
import Header from "./components/Header";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Default premium dark theme
  const [loading, setLoading] = useState<boolean>(true);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Set initial HTML theme compliance
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Page Loader Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Track page scroll to update progress bar in Header
  useEffect(() => {
    const handleScrollPercent = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercent(currentProgress);
      }
    };
    window.addEventListener("scroll", handleScrollPercent);
    return () => window.removeEventListener("scroll", handleScrollPercent);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0A0A0B] flex flex-col items-center justify-center z-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        <div className="space-y-6 text-center max-w-sm px-6 relative z-10 select-none">
          {/* Visual logo spinning */}
          <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
            {/* outer loading ring */}
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/10 border-t-emerald-500 animate-spin" />
            <Landmark className="w-6 h-6 text-emerald-400 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-sm font-mono tracking-[0.25em] text-white uppercase font-extrabold">
              Gautham Rao
            </h2>
            <p className="text-[10px] font-mono tracking-widest text-[#10b981]/80 animate-pulse uppercase">
              Connecting Market Tickers...
            </p>
          </div>

          {/* Dummy visual progress indicator */}
          <div className="h-[2px] w-36 mx-auto bg-slate-900 overflow-hidden rounded-full">
            <div className="h-full bg-emerald-500 rounded-full animate-marquee-loader" />
          </div>
        </div>

        {/* Footnote stating terminal status */}
        <div className="absolute bottom-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          Secured Bloomberg Terminal Link v2.026 - Live
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen text-slate-800 antialiased font-sans transition-colors duration-300 ${
      isDarkMode ? "bg-[#0A0A0B] text-slate-200" : "bg-slate-50 text-slate-800"
    }`}>
      
      {/* 1. Live Bloomberg Billboard */}
      <div className="fixed top-0 left-0 right-0 z-[60]">
        <Ticker />
      </div>

      {/* 2. Global header navigation */}
      <Header 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        scrollPercent={scrollPercent} 
      />

      {/* 3. Section contents */}
      <main>
        
        {/* Hero Segment */}
        <Hero isDarkMode={isDarkMode} />

        {/* About Segment (including Lancet background) */}
        <About isDarkMode={isDarkMode} />

        {/* Skills Cards Segment */}
        <Skills isDarkMode={isDarkMode} />

        {/* Timeline parallel lists */}
        <Experience isDarkMode={isDarkMode} />

        {/* Certifications & Badges */}
        <Certifications isDarkMode={isDarkMode} />

        {/* Bento grids for project models */}
        <Projects isDarkMode={isDarkMode} />

        {/* Validation Mail forms */}
        <Contact isDarkMode={isDarkMode} />

      </main>

      {/* 4. Foot banner */}
      <Footer isDarkMode={isDarkMode} />

    </div>
  );
}
