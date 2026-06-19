export interface StockIndexInfo {
  name: string;
  symbol: string;
  country: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  isRealTime?: boolean;
  isValued?: boolean;
}

export interface CurrencyRates {
  USD: number;
  INR: number;
  GBP: number;
  JPY: number;
  CNY: number;
  EUR: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Financial Modeling" | "Banking" | "Valuation" | "Dashboards" | "Data Analytics";
  description: string;
  keySkills: string[];
  excelUrl?: string; // Specific file reference links for Bala and Tesla models
  googleSheetUrl?: string; // Google spreadsheet url
  metrics?: { label: string; value: string }[];
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpaOrGrade?: string;
  relevantModules?: string[];
  keyFocus?: string;
  isCurrentlyPursuing?: boolean;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  status: "Completed" | "Downloaded Proof" | "Eligible to Add" | "In Study";
  isBloomberg: boolean;
  notes?: string;
}
