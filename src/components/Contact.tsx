import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Link, CheckCircle, ExternalLink, ShieldCheck, Github } from "lucide-react";
import { PERSONAL_BIO } from "../data";

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_BIO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyLinkedin = () => {
    navigator.clipboard.writeText(PERSONAL_BIO.linkedinUrl);
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2000);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(PERSONAL_BIO.githubUrl);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_BIO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1426] text-[#F8FAFC]" : "bg-white text-slate-800"
      }`}
    >
      {/* Decorative vector background grid lines representing Goldman Sachs terminal look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12 sm:mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              Direct Channels
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Contact Gautham
          </h2>
          <div className="h-[1px] w-12 bg-[#D4AF37]/50 mt-1" />
          <p className={`text-xs sm:text-sm mt-3.5 max-w-lg leading-relaxed ${
            isDarkMode ? "text-slate-400" : "text-slate-650"
          }`}>
            Recruiters, hiring managers, and professional institutions can get in touch with me directly through any of the official, secured channels listed below.
          </p>
        </div>

        {/* Centralised Premium Contact Bento Block */}
        <div className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 shadow-2xl relative overflow-hidden ${
          isDarkMode 
            ? "bg-[#1E293B] border-[#334155]" 
            : "bg-slate-50 border-slate-200 shadow-lg shadow-slate-100"
        }`}>
          {/* Subtle glowing spot */}
          <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* EMAIL COLUMN CARD */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isDarkMode 
                ? "bg-[#111827] border-[#334155] hover:border-[#D4AF37]/20" 
                : "bg-white border-slate-150 hover:shadow-sm hover:border-slate-300"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Official Email</span>
                    <a 
                      href={`mailto:${PERSONAL_BIO.email}`}
                      className={`text-sm font-bold hover:text-[#D4AF37] transition-colors block mt-0.5 break-all ${
                        isDarkMode ? "text-white" : "text-slate-850"
                      }`}
                    >
                      {PERSONAL_BIO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className={`p-2 rounded-lg border text-xs transition-all cursor-pointer ${
                    isDarkMode 
                      ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/5" 
                      : "border-slate-250 text-slate-500 hover:text-slate-900"
                  }`}
                  title="Copy email copy"
                >
                  {copiedEmail ? (
                    <span className="text-[9px] font-mono font-extrabold text-[#D4AF37] uppercase">Copied</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* PHONE COLUMN CARD */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isDarkMode 
                ? "bg-[#111827] border-[#334155] hover:border-[#D4AF37]/20" 
                : "bg-white border-slate-150 hover:shadow-sm hover:border-slate-300"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Direct UK Line</span>
                    <a 
                      href={`tel:${PERSONAL_BIO.phone.replace(/\s+/g, "")}`}
                      className={`text-sm font-bold hover:text-[#D4AF37] transition-colors block mt-0.5 ${
                        isDarkMode ? "text-white" : "text-slate-850"
                      }`}
                    >
                      {PERSONAL_BIO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className={`p-2 rounded-lg border text-xs transition-all cursor-pointer ${
                    isDarkMode 
                      ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/5" 
                      : "border-slate-250 text-slate-500 hover:text-slate-900"
                  }`}
                  title="Copy telephone link"
                >
                  {copiedPhone ? (
                    <span className="text-[9px] font-mono font-extrabold text-[#D4AF37] uppercase">Copied</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* LINKEDIN COLUMN CARD */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isDarkMode 
                ? "bg-[#111827] border-[#334155] hover:border-[#D4AF37]/20" 
                : "bg-white border-slate-150 hover:shadow-sm hover:border-slate-300"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Link className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Official LinkedIn</span>
                    <a 
                      href={PERSONAL_BIO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold hover:text-[#D4AF37] transition-colors flex items-center mt-0.5 ${
                        isDarkMode ? "text-white" : "text-slate-850"
                      }`}
                    >
                      LinkedIn Profile <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75 shrink-0" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyLinkedin}
                  className={`p-2 rounded-lg border text-xs transition-all cursor-pointer ${
                    isDarkMode 
                      ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/5" 
                      : "border-slate-250 text-slate-500 hover:text-slate-900"
                  }`}
                  title="Copy profile link"
                >
                  {copiedLinkedin ? (
                    <span className="text-[9px] font-mono font-extrabold text-[#D4AF37] uppercase">Copied</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* GITHUB COLUMN CARD */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isDarkMode 
                ? "bg-[#111827] border-[#334155] hover:border-[#D4AF37]/20" 
                : "bg-white border-slate-150 hover:shadow-sm hover:border-slate-300"
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Official GitHub</span>
                    <a 
                      href={PERSONAL_BIO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold hover:text-[#D4AF37] transition-colors flex items-center mt-0.5 ${
                        isDarkMode ? "text-white" : "text-slate-850"
                      }`}
                    >
                      GitHub Profile <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75 shrink-0" />
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyGithub}
                  className={`p-2 rounded-lg border text-xs transition-all cursor-pointer ${
                    isDarkMode 
                      ? "border-white/10 text-slate-400 hover:text-white hover:bg-white/5" 
                      : "border-slate-250 text-slate-500 hover:text-slate-900"
                  }`}
                  title="Copy GitHub link"
                >
                  {copiedGithub ? (
                    <span className="text-[9px] font-mono font-extrabold text-[#D4AF37] uppercase">Copied</span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* LOCATION COLUMN CARD */}
            <div className={`p-5 rounded-2xl border md:col-span-2 ${
              isDarkMode ? "bg-[#111827] border-[#334155]" : "bg-white border-slate-150"
            }`}>
              <div className="flex items-center space-x-3.5">
                <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Active Base</span>
                  <span className={`text-sm font-bold block mt-0.5 ${
                    isDarkMode ? "text-white" : "text-slate-850"
                  }`}>
                    {PERSONAL_BIO.location}
                  </span>
                  <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase mt-1 inline-block">
                    OPEN TO OPPORTUNITIES IN UK & WORLDWIDE
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
            <span className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-[#D4AF37]" />
              Secured Connection Ledger Active
            </span>
            <span>Last Updated: June 2026</span>
          </div>

        </div>

      </div>
    </section>
  );
}
