import { ProjectItem, WorkExperience, EducationItem, CertificationItem } from "./types";

export const PERSONAL_BIO = {
  fullName: "Gautham Rao",
  professionalTitle: "Banking & Finance Professional",
  tagline: "Bridging the gap between empirical financial theory and robust market analytics. Enthusiastic about Financial Analysis, Risk Analysis, Banking Analysis, and Treasury operations.",
  email: "gauthamrao13@outlook.com",
  phone: "+44 7553349858",
  location: "United Kingdom",
  openToOpportunities: "United Kingdom & Worldwide",
  linkedinUrl: "https://www.linkedin.com/in/gautham-rao-852b70232/",
  aboutMeParagraph: "Deeply passionate financial researcher holding an MSc in Money, Banking & Finance from Lancaster University and a Bachelor of Commerce (Accounting & Finance). Specializes in quantitative financial statement analysis, credit risk evaluation, and corporate valuation frameworks. Combining core financial principles with advanced analytical tools like Excel, SQL, and Power BI to translate complex data sets into highly strategic, actionable banking and risk insights.",
  keyStats: [
    { value: "2+", label: "Years of Experience" },
    { value: "7+", label: "Financial Models Shipped" },
    { value: "4x", label: "Bloomberg Certifications" },
    { value: "100+", label: "Statements Analyzed" },
    { value: "8.43", label: "BCom CGPA Merit" }
  ]
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "tesla-dcf",
    title: "Tesla Inc. Intrinsic Valuation Model (DCF)",
    category: "Valuation",
    description: "Developed a comprehensive three-statement discounted cash flow (DCF) valuation model for Tesla, projecting future cash flows and calculating intrinsic value using standard pro-forma forecasting methodologies.",
    keySkills: ["Valuation Modelling", "WACC Estimation", "Pro-forma Forecasting", "Sensitivity Analysis", "Advanced Excel"],
    excelUrl: "/assets/Tesla_DCF_Valuation_Model.xlsx",
    googleSheetUrl: "https://docs.google.com/spreadsheets/d/1u_HZ1mzoPuojsIwWm2x6K3wCiKUEbL6dhwI0s8lUPrw/edit?usp=sharing",
    metrics: [
      { label: "Valuation Methodology", value: "Discounted Cash Flow (DCF)" },
      { label: "Analysis Horizon", value: "5-Year Pro-Forma Forecast" }
    ]
  },
  {
    id: "barclays-valuation",
    title: "Barclays PLC Corporate Valuation & Forecasting Model",
    category: "Financial Modeling",
    description: "Constructed a professional corporate valuation and five-year pro-forma forecast model for Barclays PLC studying historical credit assets, operating margins, capital ratios, and leverage indicators.",
    keySkills: ["Operating Models", "Credit Metrics", "Capital Ratios", "Valuation Analysis", "Financial Modeling"],
    excelUrl: "/assets/Barclays_Valuation_Model.xlsx",
    googleSheetUrl: "https://docs.google.com/spreadsheets/d/16QGkcBG7-oxIpefDFz6Mq2NGZXyCWnCXLG6eumiwO5c/edit?usp=sharing",
    metrics: [
      { label: "Analysis Focus", value: "Operating Performance" },
      { label: "Reporting Standards", value: "IFRS / UK GAAP Compliant" }
    ]
  },
  {
    id: "ratio-analysis",
    title: "Financial Ratio Analysis Dashboard",
    category: "Dashboards",
    description: "Engineered an interactive dashboard visualizing liquidity, leverage, activity, and profitability ratios. Includes automated vertical and horizontal analysis engines for cross-industry public companies, facilitating swift risk audits.",
    keySkills: ["Ratio Analysis", "Tableau", "Enterprise Performance Audit", "Dupont Analysis Formulae"],
    metrics: [
      { label: "Ratios Monitored", value: "18 Active" },
      { label: "Visual Components", value: "Dupont Cascade Chart" }
    ]
  },
  {
    id: "banking-risk",
    title: "Banking Credit Risk Assessment Engine",
    category: "Banking",
    description: "Built a risk scorecard evaluating commercial loan applicants by calculating probability of default (PD) and loss given default (LGD) models using macroeconomic risk variables and balanced corporate scorecard parameters.",
    keySkills: ["Credit Risk Analysis", "LGD / PD Metrics", "Risk Identification", "Financial Statement Audit"],
    metrics: [
      { label: "Risk Factors Tracked", value: "12 Core Parameters" },
      { label: "Score Level Calibration", value: "High-Fidelity Heatmap" }
    ]
  },
  {
    id: "stock-portfolio",
    title: "Stock Portfolio Performance Tracker",
    category: "Data Analytics",
    description: "Constructed a portfolio optimizer analyzing historic risk-return ratios. Tracks Sharpe ratio, beta index parameters, maximum drawdown, and Jensen's alpha, optimizing active weights using historic stock covariance matrices.",
    keySkills: ["SQL", "Data Analytics", "Capital Asset Pricing Model (CAPM)", "Portfolio Optimization"],
    metrics: [
      { label: "Historical Horizon", value: "5 Years Daily" },
      { label: "Risk Measure", value: "Sharpe & Beta Optimizer" }
    ]
  },
  {
    id: "performance-analysis",
    title: "Company Performance Comparative Analysis",
    category: "Data Analytics",
    description: "Conducted exhaustive comparative auditing of performance indicators across top competitors in the automotive and energy sectors to map market share dynamics and cost-efficiency trends.",
    keySkills: ["Financial Analysis", "Benchmarking", "SQL Querying", "Strategic Cost Structures"],
    metrics: [
      { label: "Peer Firms Audited", value: "5 Competitors" },
      { label: "Financial Data Cleaned", value: "15,000+ Cells via SQL" }
    ]
  },
  {
    id: "excel-forecasting",
    title: "Strategic Corporate Forecasting Model",
    category: "Financial Modeling",
    description: "Engineered a recursive 5-year budget forecasting and trend-projection tool incorporating automatic linear and non-linear regression inputs driven by historical cost centers.",
    keySkills: ["Advanced Excel", "Linear Regression Forecasting", "VBA & Macro Optimization", "Quantitative Analytics"],
    metrics: [
      { label: "Forecast Interval", value: "20 Quarters Out" },
      { label: "Standard Error Limit", value: "<4.2% Residual Variance" }
    ]
  }
];

export const EXPERIENCE_DATA: WorkExperience[] = [
  {
    role: "Junior Analyst / Auditor",
    company: "Dexian",
    location: "India",
    duration: "2023 – 2024",
    bullets: [
      "Conducted detailed financial data analysis to support automated audit and internal compliance processes, auditing full balance sheets and income statements to identify outliers",
      "Performed detailed credit risk awareness and liquidity checks on counterparties by examining cash flows, working capital trends, and debt service coverage statistics",
      "Evaluated corporate treasury flows and cash positioning dashboards, auditing incoming and outgoing transactions to identify liquidity risks in standard payment pipelines",
      "Formulated comprehensive, highly structured financial reporting models in Excel leveraging pivot tables, LOOKUP, conditional matrices, and automated validation filters to expedite audit delivery",
      "Gained working exposure to Power BI and Tableau for synthesizing multi-source financial risk indicators into highly presentable client-facing executive dashboards",
      "Engineered automated SQL queries and data auditing workflows, substantially streamlining duplicate transaction detection and reducing verification processing cycles from 3 days to hours",
      "Collaborated with risk consultants and compliance controllers to ensure corporate balance sheets complied meticulously with internal standards and federal audit regulations"
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "MSc in Money, Banking & Finance",
    institution: "Lancaster University (Top 10 UK Institution)",
    location: "Lancaster, United Kingdom",
    duration: "2025 – 2026",
    gpaOrGrade: "Ongoing Candidateship",
    relevantModules: [
      "Risk Management",
      "Financial Markets & Institutions",
      "Banking & Financial Intermediation",
      "Quantitative Methods in Finance"
    ],
    keyFocus: "Core emphasis on treasury risk management, credit analysis frameworks, macroeconomic trends, and monetary transmission policy."
  },
  {
    degree: "Bachelor of Commerce (BCom) - Accounting & Finance Focus",
    institution: "Pune University",
    location: "India",
    duration: "2019 – 2022",
    gpaOrGrade: "8.43 CGPA (Distinction)",
    relevantModules: [
      "Financial Accounting",
      "Corporate Finance",
      "Auditing",
      "Auditing Practices & Costing Systems",
      "Taxation Law"
    ],
    keyFocus: "First-class honors emphasizing rigorous financial reporting standards, costing structures, corporate tax compliance, and auditing methodology."
  },
  {
    degree: "US CMA (Certified Management Accountant) Candidate",
    institution: "Institute of Management Accountants (IMA, USA)",
    location: "International",
    duration: "Currently Pursuing",
    gpaOrGrade: "Candidate in Study",
    isCurrentlyPursuing: true,
    keyFocus: "Acquiring advanced mastery over planning, budgeting, strategic financial management, financial statement decision frameworks, and corporate ethics guidelines."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "grant-thornton-fmv",
    name: "Financial Modelling & Valuation",
    issuer: "Grant Thornton",
    status: "Completed",
    isBloomberg: false,
    notes: "Distinguished credentials for masterclass proficiency in building three-statement corporate models, valuation matrices, and structured transaction logic."
  },
  {
    id: "bloomberg-bmc",
    name: "Bloomberg Market Concepts (BMC)",
    issuer: "Bloomberg Professional",
    status: "Downloaded Proof",
    isBloomberg: true,
    notes: "Verified core certificate demonstrating professional competence in terminal operation, economic indicators, currencies, fixed income, and equity markets."
  },
  {
    id: "bloomberg-excel",
    name: "Bloomberg Spreadsheet Analysis",
    issuer: "Bloomberg Professional",
    status: "Downloaded Proof",
    isBloomberg: true,
    notes: "Proficient integration of Bloomberg Terminal data live streams directly to Excel models using standard cell functions, API commands, and data widgets."
  },
  {
    id: "bloomberg-esg",
    name: "Bloomberg ESG Fundamentals",
    issuer: "Bloomberg Professional",
    status: "Downloaded Proof",
    isBloomberg: true,
    notes: "Incorporating environmental, social, and governance rating datasets inside active financial analysis to construct responsible, risk-adjusted portfolios."
  },
  {
    id: "bloomberg-finance",
    name: "Bloomberg Finance Fundamentals",
    issuer: "Bloomberg Professional",
    status: "Downloaded Proof",
    isBloomberg: true,
    notes: "Practical exploration of market mechanics, interest rate policies, equity analyst workflows, and portfolio risk evaluation."
  }
];
