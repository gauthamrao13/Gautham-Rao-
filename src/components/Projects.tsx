import { useState } from "react";
import { FileSpreadsheet, Sparkles, CheckCircle, TableProperties } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import { ProjectItem } from "../types";

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Financial Modeling", "Banking", "Valuation", "Dashboards", "Data Analytics"];

  const filteredProjects = activeCategory === "All"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((proj) => proj.category === activeCategory);

  // Split items: make the flagship Excel models STICKY (always visible at top), other projects are filtered dynamically
  const excelModels = PROJECTS_DATA.filter(
    (proj) => proj.id === "tesla-dcf" || proj.id === "barclays-valuation"
  );
  const otherProjects = filteredProjects.filter(
    (proj) => proj.id !== "tesla-dcf" && proj.id !== "barclays-valuation"
  );

  return (
    <section 
      id="projects" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1426]" : "bg-slate-50"
      }`}
    >
      {/* Visual blueprint background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-10 sm:mb-14">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              Productive Ledger
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Selected Financial Work
          </h2>
          <div className="h-[1px] w-20 bg-[#D4AF37]/50 mt-1" />
        </div>

        {/* Filter Navigation list */}
        <div className="flex flex-wrap items-center gap-1.5 mb-12">
          {categories.map((cat) => (
            <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`text-[10px] sm:text-xs font-mono px-3.5 py-1.5 rounded-lg border transition-all uppercase tracking-wide cursor-pointer ${
                 activeCategory === cat
                   ? "bg-[#D4AF37] border-[#D4AF37] text-[#0B1426] font-bold"
                   : isDarkMode
                   ? "bg-[#1E293B] border-[#334155] text-slate-400 hover:text-white"
                   : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
               }`}
            >
               {cat}
            </button>
          ))}
        </div>

        {/* 1. ROW: Flagship Valuation Excel Models */}
        {excelModels.length > 0 && (
          <div className="space-y-6 mb-12 sm:mb-16">
            <div className="flex items-center space-x-2.5">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <h3 className={`text-xs font-mono uppercase tracking-widest font-extrabold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
                Flagship Interactive Financial Models (.xlsx)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {excelModels.map((project) => (
                <div
                  key={project.id}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 ${
                    isDarkMode
                      ? "bg-gradient-to-tr from-[#D4AF37]/[0.02] to-[#1E293B] border-[#334155] shadow-xl shadow-[#D4AF37]/[0.01]"
                      : "bg-white border-amber-500/30 hover:shadow-lg hover:border-[#D4AF37]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono uppercase bg-[#D4AF37]/10 text-[#D4AF37] px-2.5 py-0.5 rounded border border-[#D4AF37]/20 font-bold tracking-widest">
                        {project.category}
                      </span>
                      <span className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase flex items-center shadow-sm">
                        <Sparkles className="w-3 h-3 mr-1 animate-pulse" />
                        Excel Assets Completed
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${
                      isDarkMode ? "text-white" : "text-slate-900"
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed font-sans ${
                      isDarkMode ? "text-slate-400" : "text-slate-650"
                    }`}>
                      {project.description}
                    </p>

                    {/* Quant Stats overlay */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3.5 pt-2">
                        {project.metrics.map((metric, metricIdx) => (
                          <div 
                            key={metricIdx}
                            className={`p-2.5 rounded-lg border ${
                              isDarkMode ? "bg-[#1E293B] border-[#334155]" : "bg-slate-50 border-slate-150"
                            }`}
                          >
                            <span className="text-[9px] font-mono uppercase text-slate-400 block tracking-tight">
                              {metric.label}
                            </span>
                            <span className="text-[11px] font-mono font-extrabold block mt-0.5 text-[#D4AF37]">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Skills Pills */}
                    <div className="pt-2">
                      <h4 className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-extrabold mb-2">
                        Execution Skills:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.keySkills.map((tag) => (
                          <span 
                            key={tag}
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-md border ${
                              isDarkMode
                                ? "bg-[#D4AF37]/5 border-[#D4AF37]/15 text-[#D4AF37]"
                                : "bg-[#D4AF37]/[0.02] border-[#D4AF37]/20 text-[#D4AF37]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-800/10">
                    <a
                      href={project.googleSheetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-[#D4AF37] hover:bg-amber-600 text-[#0B1426] font-mono text-xs uppercase font-extrabold py-3.5 px-4 rounded-lg transform hover:-translate-y-0.5 transition-all shadow-md shadow-[#D4AF37]/10 cursor-pointer focus:outline-none text-center"
                    >
                      <TableProperties className="w-4 h-4 shrink-0" />
                      <span>View Google Sheet</span>
                    </a>
                    <p className="text-[9px] text-center text-slate-400 font-mono mt-2">
                       Platform: Dual-Optimized Google Sheets & Excel | Dynamic Calculation Formulas
                     </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Spreadsheet / Excel Access & Disclaimer Section */}
            <div className={`mt-8 p-6 rounded-2xl border text-left transition-all ${
              isDarkMode 
                ? "bg-[#1E293B] border-[#D4AF37]/10 shadow-xl" 
                : "bg-amber-50/[0.02] border-[#D4AF37]/20 shadow-sm"
            }`}>
              <div className="space-y-3">
                <span className="inline-flex items-center text-[9px] uppercase font-mono font-extrabold px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 tracking-wider">
                  Spreadsheet Availability & Interactive Review
                </span>
                <p className={`text-xs sm:text-[13px] leading-relaxed font-sans ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                  <strong>Notice:</strong> These corporate valuation models represent pristine financial assessments built in line with institutional standards. They are hosted live as interactive <strong>Google Spreadsheets</strong> so that you can inspect standard mathematical relations, cell-by-cell formulas (including WACC calculations, perpetuity discounting, and balance sheet ratios) directly in your browser.
                </p>
                <p className={`text-[10px] sm:text-xs font-mono leading-relaxed ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
                  * To work offline or modify the projections: simply click the "View Google Sheet" button above to open the live sheet, and navigate to <strong>File → Make a copy</strong> (or <strong>File → Download → Microsoft Excel (.xlsx)</strong>) to save a personal editable copy to your Google Drive or local workspace.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* 2. ROW: Concise Analytical Indicators & Dashboards (Styled identical to Certifications cards!) */}
        {otherProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className={`text-xs font-mono uppercase tracking-widest font-extrabold ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
              Core Analytical Portfolios & Dashboards
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                    isDarkMode
                      ? "bg-[#1E293B] border-[#334155] hover:border-[#D4AF37]/20"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Issuer label equivalent */}
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-mono uppercase bg-slate-500/10 text-slate-400 px-2 py-0.5 rounded border border-slate-500/10 font-bold tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">FIN-AUDIT</span>
                    </div>

                    {/* Title */}
                    <h3 className={`text-sm sm:text-base font-extrabold tracking-tight ${
                      isDarkMode ? "text-slate-100" : "text-slate-850"
                    }`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed font-sans ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}>
                      {project.description}
                    </p>

                    {/* Compact tag block resembling Certifications */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.keySkills.map((tag) => (
                          <span 
                            key={tag}
                            className="text-[9px] font-mono px-2 py-0.5 bg-slate-500/5 text-slate-400 rounded-md border border-slate-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Foot bar resembling view proof button */}
                  <div className="mt-6 pt-4 border-t border-slate-800/10 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-extrabold flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 mr-1 text-[#D4AF37]" />
                      Audited Ledger Code
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37]">
                      SECURED
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
