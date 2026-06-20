import { CheckCircle2, TrendingUp, Cpu, Users, BarChart3, Binary, TableProperties } from "lucide-react";

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  // Domain knowledge, engineering tools, and soft competencies
  const groups = [
    {
      title: "Finance & Banking Domain",
      icon: TrendingUp,
      color: "from-amber-500 to-[#D4AF37]",
      skills: [
        "Financial Statement Analysis",
        "Financial Modeling (Three-Statement)",
        "Discounted Cash Flow (DCF) Valuation",
        "Liquidity & Ratio Auditing",
        "Corporate Finance Frameworks",
        "Credit Risk Metrics (LGD & PD)",
        "Liquidity & Treasury Stewardship",
        "Internal & External Auditing Rules",
        "Regulatory & Basel Compliance Checks"
      ]
    },
    {
      title: "Digital Analytics & Platforms",
      icon: Cpu,
      color: "from-slate-500 to-slate-600",
      skills: [
        "Advanced Microsoft Excel (VBA, XLOOKUP, Pivot Tables, Macros)",
        "Structured Query Language (SQL) Querying",
        "Financial Dashboarding (Power BI & Tableau)",
        "Python (Scientific Data Stack - Pandas, NumPy)",
        "Qualitative Data Cleansing & Validation",
        "ERP Financial Reporting Systems (SAP/Oracle)"
      ]
    },
    {
      title: "Professional Core Competencies",
      icon: Users,
      color: "from-[#D4AF37]/60 to-amber-600",
      skills: [
        "Auditing Control Identification",
        "Rigorous Quantitative Analysis",
        "Strategic Problem Solving",
        "Clarity in Stakeholder Communication",
        "Regulatory Framework Interpretation",
        "Empirical Research & Forecasting"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 md:py-28 relative transition-colors duration-300 ${
        isDarkMode ? "bg-[#0B1426]" : "bg-slate-50"
      }`}
    >
      {/* Decorative vector grid backdrops to reinforce a high-tech BlackRock financial aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12 sm:mb-16">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-6 bg-[#D4AF37] rounded-full" />
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
              Competency Matrix
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDarkMode ? "text-white" : "text-slate-900"
          }`}>
            Technical Skills & Core Competencies
          </h2>
          <div className="h-[1px] w-20 bg-[#D4AF37]/50 mt-1" />
        </div>

        {/* Competency Bento Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {groups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <div
                key={groupIdx}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col h-full transition-all duration-300 transform hover:-translate-y-1 ${
                  isDarkMode 
                    ? "bg-[#1E293B] border-[#334155] hover:border-[#D4AF37]/20 shadow-xl" 
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {/* Card Title Header with Gradient Accents */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#334155]/35">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-tr ${group.color} text-white shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-sm sm:text-base font-extrabold tracking-tight uppercase font-sans ${
                    isDarkMode ? "text-slate-100" : "text-slate-850"
                  }`}>
                    {group.title}
                  </h3>
                </div>

                {/* Bullets List */}
                <div className="flex-grow flex flex-col space-y-4">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-start space-x-3 group/skill">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5 transition-transform group-hover/skill:scale-110" />
                      <span className={`text-xs font-sans font-medium hover:text-[#D4AF37] transition-colors leading-tight ${
                        isDarkMode ? "text-slate-300" : "text-slate-700"
                      }`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Advanced Excel and DBMS Mini Spotlight Focus Block */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl border ${
          isDarkMode ? "bg-[#1E293B] border-[#334155]" : "bg-white border-slate-200"
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h4 className={`text-base font-extrabold tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}>
                Spotlight: Financial Modeling & Analytical Toolkits
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-slate-400" : "text-slate-650"}`}>
                Specialize in building advanced financial modeling spreadsheets and analytical databases for corporate valuation, credit risk assessments, and portfolio optimization. Expert in standardizing multi-statement pro-forma projections, automated debt scheduling, currency triangulation arrays, interest rate sensitivity models (VBA/macros), and banking ratio visualization dashboards.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 shrink-0">
              {["Financial Modeling", "Scenario Sensitivity", "VBA & Macros", "SQL Querying", "Equity Ratios", "Portfolio Tracker"].map((tag) => (
                <span 
                  key={tag}
                  className="bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-mono font-bold px-2.5 py-1 rounded inline-flex items-center space-x-1 border border-[#D4AF37]/25 uppercase"
                >
                  <TableProperties className="w-3.5 h-3.5 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
