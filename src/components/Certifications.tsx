import { useState } from "react";
import { Award, CheckCircle, Clock, ExternalLink, ShieldAlert, Award as AwardIcon } from "lucide-react";
import { CERTIFICATIONS_DATA } from "../data";

interface CertificationsProps {
  isDarkMode: boolean;
}

export default function Certifications({ isDarkMode }: CertificationsProps) {
  const [certs, setCerts] = useState(CERTIFICATIONS_DATA);

  // Helper to color codes according to certificate status
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="inline-flex items-center text-[10px] sm:text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <CheckCircle className="w-3.5 h-3.5 mr-1" />
            Verified Complete
          </span>
        );
      case "Downloaded Proof":
        return (
          <span className="inline-flex items-center text-[10px] sm:text-xs font-mono font-bold bg-sky-500/10 text-sky-400 px-2.5 py-1 rounded-full border border-sky-500/20">
            <AwardIcon className="w-3.5 h-3.5 mr-1" />
            Downloaded & Active
          </span>
        );
      case "Eligible to Add":
        return (
          <span className="inline-flex items-center text-[10px] sm:text-xs font-mono font-bold bg-slate-500/15 text-slate-400 px-2.5 py-1 rounded-full border border-slate-500/20">
            <Clock className="w-3.5 h-3.5 mr-1" />
            Eligible to Load
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center text-[10px] sm:text-xs font-mono font-bold bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Clock className="w-3.5 h-3.5 mr-1" />
            In Study
          </span>
        );
    }
  };

  return (
    <section 
      id="certifications" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0A0A0B]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12 sm:mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-bold">
              Qualifications & Badges
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Professional Certifications
          </h2>
          <div className="h-[1px] w-20 bg-emerald-500/50 mt-1" />
        </div>

        {/* Informative Security Header stating ONLY Gautham can modify these links */}
        <div className={`p-4 rounded-xl border mb-10 flex items-start space-x-3 max-w-3xl ${
          isDarkMode 
            ? "bg-[#0D0D0E]/60 border-white/10 text-slate-400" 
            : "bg-white border-slate-200 text-slate-600"
        }`}>
          <ShieldAlert className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 animate-pulse" />
          <div className="space-y-1">
            <h4 className={`text-xs font-mono uppercase tracking-wider font-extrabold ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
              Secure Client Ownership Mode
            </h4>
            <p className="text-[11px] leading-relaxed">
              These certificates are hard-compiled directly into Gautham's static file distribution tree. This ensures security and verification integrity, completely immune to unauthorized runtime configuration changes.
            </p>
          </div>
        </div>

        {/* Certifications Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 ${
                cert.status === "Downloaded Proof" || cert.status === "Completed"
                  ? isDarkMode
                    ? "bg-gradient-to-tr from-emerald-500/[0.03] to-[#0D0D0E]/60 border-white/10 hover:border-white/20 shadow-xl shadow-emerald-500/2"
                    : "bg-white border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-md"
                  : isDarkMode
                  ? "bg-[#0D0D0E]/40 border-white/10 hover:border-white/20"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="space-y-4">
                {/* Meta Issuer & Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`p-1.5 rounded-lg border text-xs font-mono font-bold ${
                      cert.isBloomberg
                        ? isDarkMode
                          ? "bg-black/40 border-white/5 text-amber-500"
                          : "bg-slate-105 border-slate-200 text-amber-600"
                        : isDarkMode
                        ? "bg-black/40 border-white/5 text-emerald-500"
                        : "bg-slate-105 border-slate-200 text-emerald-600"
                    }`}>
                      {cert.issuer.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="shrink-0">{getStatusBadge(cert.status)}</div>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${
                    isDarkMode ? "text-slate-100" : "text-slate-850"
                  }`}>
                    {cert.name}
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400 font-medium">
                    Issued by: {cert.issuer}
                  </p>
                </div>

                {/* Notes */}
                <p className={`text-xs leading-relaxed font-sans ${
                  isDarkMode ? "text-slate-400" : "text-slate-600"
                }`}>
                  {cert.notes}
                </p>
              </div>

              {/* LinkedIn Proof Link */}
              <div className="mt-6 pt-4 border-t border-slate-800/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-extrabold flex items-center">
                  <Award className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  Verified Credentials
                </span>
                <a
                  href="https://www.linkedin.com/in/gautham-rao-852b70232/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-emerald-500 hover:text-emerald-400 flex items-center transition-colors"
                >
                  View proof <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
