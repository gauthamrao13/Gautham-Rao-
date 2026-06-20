import { BookOpen, MapPin, Layers, GraduationCap, Award, CheckCircle } from "lucide-react";
import { PERSONAL_BIO } from "../data";

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const highlights = [
    "Expert level Financial Reporting & Statement auditing practices",
    "Comprehensive credit analysis & debt ratio evaluation",
    "Specialized in three-statement corporate valuation modelling",
    "Deep exposure to Treasury operations & Capital Market mechanics",
    "Advanced Microsoft Excel user with foundational SQL & Python knowledge"
  ];

  return (
    <section 
      id="about" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1426] text-[#F8FAFC]" : "bg-white text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12 sm:mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              Professional Brief
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            About Gautham
          </h2>
          <div className="h-[1px] w-20 bg-[#D4AF37]/50 mt-1" />
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* PROFILE NARRATIVE COLUMN */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
              isDarkMode ? "text-slate-200" : "text-slate-800"
            }`}>
              Finance Postgraduate Trained on Valuations, Risk Frameworks & Data
            </h3>
            
            <p className={`text-base leading-relaxed ${
              isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
            }`}>
              With an rigorous academic foundation and hands-on exposure to audit processes, compliance, and reporting cycles, I specialise in distilling multidimensional raw transaction datasets into highly reliable business projections. I believe inside a volatile credit environment, risk transparency and treasury stewardship represent a bank's most primary assets.
            </p>

            <p className={`text-base leading-relaxed ${
              isDarkMode ? "text-[#CBD5E1]" : "text-slate-600"
            }`}>
              During my studies for my MSc at Lancaster University, I have acquired advanced competencies in credit risk identification, money intermediation pipelines, and quantitative methodologies. These methodologies bolster my execution of corporate valuations and audit routines with utmost precision.
            </p>

            {/* Quick bullets */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase text-[#D4AF37] tracking-wider font-extrabold mb-4">
                Core Strengths & Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span className={`text-xs font-sans font-medium line-clamp-2 ${
                      isDarkMode ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TARGET POSITIONS PLACEMENT COLUMN */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            
            {/* Quick Focus Card */}
            <div className={`p-6 rounded-2xl border ${
              isDarkMode ? "bg-[#1E293B] border-[#334155]" : "bg-white border-slate-150 shadow-sm"
            }`}>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-extrabold mb-2.5">
                Target Positions:
              </h4>
              <div className="flex flex-wrap gap-1.5 font-sans">
                {["Financial Analyst", "Treasury Analyst", "Banking Analyst", "Banking Operations", "Corporate Finance", "Internal Audit", "Compliance"].map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 bg-slate-500/5 text-slate-400 rounded-md border border-slate-500/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
