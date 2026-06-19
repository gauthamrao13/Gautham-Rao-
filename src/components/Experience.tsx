import { Briefcase, GraduationCap, MapPin, Calendar, BookOpen, Clock, FileCheck } from "lucide-react";
import { EXPERIENCE_DATA, EDUCATION_DATA } from "../data";

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  return (
    <section 
      id="experience" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0A0A0B] text-slate-200" : "bg-white text-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dual Columns: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
          
          {/* PROFESSIONAL EXPERIENCE COLUMN (Left) */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-bold">
                  Corporate Journey
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                Professional Experience
              </h2>
              <div className="h-[1px] w-16 bg-emerald-500/50 mt-1" />
            </div>

            <div className="space-y-8">
              {EXPERIENCE_DATA.map((job, idx) => (
                <div 
                  key={idx}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all ${
                    isDarkMode 
                      ? "bg-[#0D0D0E]/60 border-white/10 hover:border-white/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Job metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 mb-6">
                    <div>
                      <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${
                        isDarkMode ? "text-slate-100" : "text-slate-900"
                      }`}>
                        {job.role}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs font-mono text-emerald-500 font-bold uppercase">{job.company}</span>
                        <span className="text-slate-400 font-sans text-xs">•</span>
                        <span className="flex items-center text-slate-400 font-sans text-[11px]">
                          <MapPin className="w-3 h-3 mr-1 shrink-0" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    
                    <div className="shrink-0">
                      <span className="inline-flex items-center text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded border border-emerald-500/20">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.duration}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points detailing audit credit & risk analysis targeting */}
                  <div className="space-y-3.5">
                    {job.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="flex items-start space-x-2.5 group/bullet">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0 group-hover/bullet:scale-125 transition-transform" />
                        <p className={`text-xs sm:text-[13px] leading-relaxed font-sans ${
                          isDarkMode ? "text-slate-300" : "text-slate-650"
                        }`}>
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION & ACADEMICS COLUMN (Right) */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2 mb-4">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest font-bold">
                  Academic Roots
                </span>
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDarkMode ? "text-white" : "text-slate-900"
              }`}>
                Academic Credentials
              </h2>
              <div className="h-[1px] w-16 bg-emerald-500/50 mt-1" />
            </div>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div 
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                    edu.isCurrentlyPursuing
                      ? isDarkMode
                        ? "bg-emerald-500/5 border-emerald-500/20 shadow-lg shadow-emerald-500/5"
                        : "bg-emerald-500/[0.02] border-emerald-500/30 shadow-md shadow-emerald-500/[0.02]"
                      : isDarkMode
                      ? "bg-[#0D0D0E]/60 border-white/10 hover:border-white/20"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className={`text-sm sm:text-base font-extrabold tracking-tight ${
                        isDarkMode ? "text-slate-100" : "text-slate-900"
                      }`}>
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-mono text-emerald-500 mt-0.5">{edu.institution}</p>
                    </div>

                    <div className="shrink-0">
                      <span className={`inline-flex items-center text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                        edu.isCurrentlyPursuing
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 uppercase tracking-widest animate-pulse"
                          : "bg-slate-500/5 text-slate-400 border-slate-500/20"
                      }`}>
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 text-slate-400 font-sans text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{edu.location}</span>
                    {edu.gpaOrGrade && (
                      <>
                        <span>•</span>
                        <span className="font-mono text-emerald-500 bg-emerald-500/5 px-2 py-0.5 rounded text-[11px] font-extrabold">{edu.gpaOrGrade}</span>
                      </>
                    )}
                  </div>

                  <p className={`text-xs leading-relaxed font-sans mt-3 border-l border-slate-500/20 pl-3 ${
                    isDarkMode ? "text-slate-300" : "text-slate-650"
                  }`}>
                    {edu.keyFocus}
                  </p>

                  {edu.relevantModules && edu.relevantModules.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-800/15">
                      <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-extrabold mb-2">Relevant Modules:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantModules.map((module) => (
                          <span 
                            key={module}
                            className={`text-[10px] font-sans px-2 py-0.5 rounded-md border ${
                              isDarkMode 
                                ? "bg-black/40 border-white/5 text-slate-300" 
                                : "bg-white border-slate-200 text-slate-600 shadow-sm"
                            }`}
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
