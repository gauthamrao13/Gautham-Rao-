import React from "react";
import { Mail, FileText, ArrowDown, MoveRight } from "lucide-react";
import { PERSONAL_BIO } from "../data";
import { motion } from "motion/react";

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="top" 
      className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex flex-col justify-center transition-colors duration-300 ${
        isDarkMode ? "bg-[#0A0A0B] text-slate-200" : "bg-slate-50 text-slate-800"
      }`}
    >
      {/* Visual background atmospheric lights (Figma-style blur spots) */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-sky-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          
          {/* LEFT COLUMN: Title, Core Bio, Social Actions */}
          <div className="w-full lg:max-w-4xl flex flex-col space-y-6 md:space-y-8">
            
            {/* Dynamic Status Tag */}
            <div className="inline-flex">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium border uppercase tracking-wider ${
                isDarkMode 
                  ? "bg-[#0D0D0E]/60 border-white/10 text-slate-300" 
                  : "bg-white border-slate-200 text-slate-600"
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-ping" />
                Open to Opportunities in UK & Worldwide
              </span>
            </div>

            {/* Main Typographic Display Name */}
            <div className="space-y-3">
              <span className={`text-xs md:text-sm font-mono tracking-widest uppercase font-semibold text-emerald-500`}>
                POSTGRADUATE IN MONEY, BANKING & FINANCE
              </span>
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                Gautham <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-transparent bg-clip-text">Rao</span>
              </h1>
              <p className={`text-lg md:text-xl font-mono tracking-tight max-w-2xl font-medium ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}>
                Banking & Finance Professional
              </p>
            </div>

            {/* Custom Guided Description */}
            <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}>
              Postgraduate student with robust analytical training, focusing on financial risk, banking, and treasury analysis. Passionate about applying quantitative models and risk frameworks to drive robust institutional decision-making.
            </p>

            {/* View on LinkedIn Button targeting bottom page as explicitly requested */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="group relative inline-flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-mono text-xs uppercase tracking-wider font-bold py-3.5 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/40 transform hover:-translate-y-0.5 text-center focus:outline-none"
              >
                <span>View on LinkedIn</span>
                <MoveRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/assets/Gautham_Rao_Resume.pdf"
                download="Gautham_Rao_Resume.pdf"
                target="_blank"
                className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-bold py-3.5 px-6 rounded-lg border transition-all ${
                  isDarkMode 
                    ? "border-[#10b981]/20 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 hover:border-emerald-500/30" 
                    : "border-emerald-500/20 text-emerald-600 bg-emerald-500/[0.02] hover:bg-emerald-500/[0.05] hover:border-emerald-500/35"
                }`}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Resume
              </a>

              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className={`inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold py-3.5 px-3 transition-colors ${
                  isDarkMode ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Explore Works <ArrowDown className="w-4 h-4 ml-1.5 animate-bounce" />
              </a>
            </div>

            {/* Social Anchor Panel */}
            <div className="flex items-center space-x-6 pt-2 font-mono text-xs">
              <span className="text-slate-400 uppercase tracking-widest font-bold">Connect:</span>
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className={`hover:text-emerald-500 transition-colors ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                LinkedIn
              </a>
              <a
                href={PERSONAL_BIO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:text-emerald-500 transition-colors ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                GitHub
              </a>
              <a
                href={`mailto:${PERSONAL_BIO.email}`}
                className={`hover:text-emerald-500 transition-colors ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}
              >
                Email
              </a>
            </div>

          </div>

        </div>

        {/* BENTO STATS ROW */}
        <div className="mt-16 sm:mt-24">
          <div className={`grid grid-cols-2 lg:grid-cols-5 gap-6 p-6 sm:p-8 rounded-2xl border ${
            isDarkMode 
              ? "bg-[#0D0D0E]/40 border-white/10 backdrop-blur-sm" 
              : "bg-white border-slate-200 shadow-sm"
          }`}>
            {PERSONAL_BIO.keyStats.map((stat, index) => (
              <div 
                key={index}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-1"
              >
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-emerald-500">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
