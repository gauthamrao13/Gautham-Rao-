import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Briefcase, FileText, ArrowUp } from "lucide-react";
import { PERSONAL_BIO } from "../data";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  scrollPercent: number;
}

export default function Header({ isDarkMode, setIsDarkMode, scrollPercent }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Topmost Premium Sticky Navbar */}
      <header
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? isDarkMode
              ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 shadow-xl"
              : "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-md"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Indicator Bar */}
        <div 
          className="h-[3px] bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-400 origin-left transition-all duration-300 relative z-50"
          style={{ width: `${scrollPercent}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo/Identity */}
            <div className="flex items-center space-x-2">
              <a 
                href="#top"
                onClick={(e) => handleNavClick(e, "#top")}
                className="group flex flex-col items-start"
              >
                <div className="flex items-center space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                  <span className={`text-[15px] font-mono tracking-wider uppercase font-bold ${
                    isDarkMode ? "text-white" : "text-slate-900"
                  }`}>
                    G.R.R
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 tracking-tight group-hover:text-emerald-500 transition-colors">
                  FINTECH PORTFOLIO
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-mono tracking-wide uppercase transition-colors px-2 py-1 relative group ${
                    isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </nav>

            {/* Utility Controllers (Theme Switch + Live Opportunities Trigger) */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Opportunities Notification Badge */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="bg-emerald-500/10 hover:bg-emerald-500/20 active:scale-95 text-emerald-500 text-[11px] font-mono py-1 px-3 rounded-full border border-emerald-500/30 flex items-center space-x-1.5 transition-all"
              >
                <Briefcase className="w-3.5 h-3.5 animate-bounce" />
                <span className="font-semibold uppercase tracking-wider">Open to Opportunities</span>
              </a>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg border transition-all ${
                  isDarkMode
                    ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"
                    : "border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                }`}
                title={isDarkMode ? "Toggle Light Theme" : "Toggle Dark Theme"}
                aria-label="Toggle Theme Scheme"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>

            {/* Mobile menu and theme button bundle */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-1.5 rounded-lg border transition-all ${
                  isDarkMode
                    ? "border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"
                    : "border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
                aria-label="Toggle Nightmode"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isDarkMode ? "border-slate-800 text-white" : "border-slate-200 text-slate-800"
                }`}
                aria-label="Toggle Navigation Panel"
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-4 border-b ${
            isDarkMode ? "bg-[#0A0A0B] border-white/10" : "bg-white border-slate-200"
          }`}>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-mono uppercase tracking-wider py-1.5 ${
                    isDarkMode ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <hr className={isDarkMode ? "border-white/10" : "border-slate-150"} />
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center justify-center space-x-2 bg-emerald-500 text-white text-[11px] font-mono py-2 rounded-lg font-bold uppercase tracking-wider shadow-md"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Open to Opportunities in UK & Worldwide</span>
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
