import React from "react";
import { ArrowUp, Mail, Linkedin, Github, ShieldCheck } from "lucide-react";
import { PERSONAL_BIO } from "../data";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className={`py-12 border-t relative z-15 transition-colors duration-300 ${
      isDarkMode 
        ? "bg-[#111827] border-[#334155] text-slate-400" 
        : "bg-slate-100 border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Identity column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className={`text-sm font-mono tracking-wider font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                GAUTHAM RAO
              </span>
            </div>
            <p className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
              Lancaster, United Kingdom • Worldwide Availability
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={handleScrollToContact}
              className={`p-2 rounded-lg border hover:text-[#D4AF37] transition-colors ${
                isDarkMode ? "border-[#334155] text-slate-300 hover:bg-[#D4AF37]/5" : "border-slate-200 text-slate-600 hover:bg-white"
              }`}
              title="Official LinkedIn Channel (Scroll to Copy)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_BIO.email}`}
              className={`p-2 rounded-lg border hover:text-[#D4AF37] transition-colors ${
                isDarkMode ? "border-[#334155] text-slate-300 hover:bg-[#D4AF37]/5" : "border-slate-200 text-slate-600 hover:bg-white"
              }`}
              title="Direct Outlook Mailbox"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_BIO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg border hover:text-[#D4AF37] transition-colors ${
                isDarkMode ? "border-[#334155] text-slate-300 hover:bg-[#D4AF37]/5" : "border-slate-200 text-slate-600 hover:bg-white"
              }`}
              title="Official GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top clicker */}
          <div>
            <a
              href="#top"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1.5 font-mono text-xs text-[#D4AF37] font-bold hover:text-amber-400 transition-colors"
            >
              <span>Back To Top</span>
              <div className="p-1.5 bg-[#D4AF37]/10 rounded-lg shrink-0">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <hr className={`my-8 ${isDarkMode ? "border-[#334155]" : "border-slate-200"}`} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-slate-400 uppercase text-center sm:text-left">
            © 2026 Gautham Rao. Registered Master's candidate, Lancaster University.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center space-x-1.5 text-[9px] font-mono text-slate-500 uppercase">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>Secure Enterprise Architecture Compiled • 2026 OK</span>
            </div>
            <div className="text-[10px] font-mono text-[#D4AF37]/80 uppercase tracking-wider font-extrabold text-center sm:text-right">
              Designed & Developed via <span className="underline decoration-[#D4AF37]/40">Google AI Studio</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
