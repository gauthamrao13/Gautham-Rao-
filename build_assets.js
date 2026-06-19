import fs from "fs";
import path from "path";
import PDFDocument from "pdfkit";
import ExcelJS from "exceljs";

async function generateResume() {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 30, bottom: 30, left: 45, right: 40 }
  });

  const uploadDir = path.join(process.cwd(), "public", "assets");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const stream = fs.createWriteStream(path.join(uploadDir, "Gautham_Rao_Resume.pdf"));
  doc.pipe(stream);

  // Styling Helpers
  const palette = {
    primary: "#0f172a", // slate-900
    accent: "#10b981",  // emerald-500
    muted: "#64748b",   // slate-500
    body: "#334155"     // slate-700
  };

  // Typography helpers
  const useFont = (size, isBold = false) => {
    doc.font(is_bold_or_regular(isBold)).fontSize(size);
  };

  const is_bold_or_regular = (bold) => {
    return bold ? "Helvetica-Bold" : "Helvetica";
  };

  // Header - Name
  doc.fillColor(palette.primary);
  useFont(22, true);
  doc.text("GAUTHAM RAVIRAJ RAO", { align: "center" });
  doc.moveDown(0.15);

  // Header - Contact Details
  useFont(8.5, false);
  doc.fillColor(palette.muted);
  doc.text("Lancaster, United Kingdom | +44 7553349858 | gauthamrao13@outlook.com | LinkedIn: linkedin.com/in/gautham-rao-852b70232/", { align: "center" });
  doc.moveDown(0.4);

  // Line Divider
  doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(45, doc.y).lineTo(550, doc.y).stroke();
  doc.moveDown(0.5);

  // Section titles function
  const renderSectionHeader = (title) => {
    doc.moveDown(0.35);
    doc.font("Helvetica-Bold").fontSize(10.5).fillColor("#0f172a").text(title.toUpperCase(), 45);
    doc.moveDown(0.15);
    doc.lineWidth(1).strokeColor("#10b981").moveTo(45, doc.y).lineTo(550, doc.y).stroke();
    doc.moveDown(0.35);
  };

  function renderHeading(title) {
    renderSectionHeader(title);
  }

  // --- I - PERSONAL PROFILE ---
  renderHeading("PERSONAL PROFILE");
  doc.font("Helvetica").fontSize(9.5).fillColor("#334155").text(
    "MSc Money, Banking & Finance candidate at Lancaster University with professional experience as a Junior Analyst/Auditor at Dexian. Strong foundation in financial statement analysis, risk identification, and data-driven decision-making. Advanced Excel user with experience supporting audit, compliance, and financial reporting processes. Seeking entry-level roles in banking, credit risk, or financial analysis within the UK financial sector.",
    { align: "justify", lineGap: 1.5 }
  );
  doc.moveDown(0.3);

  // --- II - EDUCATION ---
  renderHeading("EDUCATION");
  
  // MSc
  doc.font("Helvetica-Bold").fontSize(10).fillColor(palette.primary).text("MSc Money, Banking & Finance");
  doc.font("Helvetica-Oblique").fontSize(9).fillColor(palette.accent).text("Lancaster University, UK  |  2025 - Present");
  doc.font("Helvetica").fontSize(9).fillColor(palette.body).text("Relevant modules: Risk Management, Financial Markets & Institutions, Banking & Financial Intermediation, Quantitative Methods");
  doc.moveDown(0.4);

  // Bachelor
  doc.font("Helvetica-Bold").fontSize(10).fillColor(palette.primary).text("Bachelor of Commerce, Accounting & Finance");
  doc.font("Helvetica-Oblique").fontSize(9).fillColor(palette.muted).text("Savitribai Phule Pune University, Pune, India  |  2022  |  8.43 CGPA", { lineGap: 1 });
  doc.font("Helvetica").fontSize(9).fillColor(palette.body).text("Key areas: Financial Accounting, Corporate Finance, Auditing, Taxation, Cost Accounting");
  doc.moveDown(0.3);

  // --- III - PROFESSIONAL EXPERIENCE ---
  renderHeading("PROFESSIONAL EXPERIENCE");
  
  doc.font("Helvetica-Bold").fontSize(10).fillColor(palette.primary).text("Junior Analyst / Auditor");
  doc.font("Helvetica-Oblique").fontSize(9).fillColor(palette.accent).text("Dexian  |  2023 - 2024");
  doc.moveDown(0.2);

  // Bullets for Experience
  const experienceBullets = [
    "Conducted financial data analysis to support audit and compliance processes, reviewing financial statements to identify discrepancies and potential risk indicators.",
    "Performed credit risk awareness checks by examining financial statements and supporting documentation for inconsistencies, liquidity concerns, and reporting gaps.",
    "Built structured Excel reports using Pivot Tables, XLOOKUP, conditional logic (IF), and data validation tools to improve the speed and accuracy of analysis.",
    "Gained working exposure to Power BI and Tableau for presenting financial and risk data in a clear, visual format.",
    "Assisted in documentation review and regulatory compliance checks, helping ensure records met internal and external reporting standards.",
    "Supported Vendor Management System (VMS) operations, maintaining accurate and up-to-date financial records.",
    "Collaborated with internal teams to streamline reporting workflows and improve database auditing accuracy.",
    "Key impact: Strengthened internal financial controls by improving the consistency and accuracy of reporting through structured data verification and detailed analysis."
  ];

  experienceBullets.forEach(bullet => {
    doc.fillColor(palette.accent).fontSize(10).text("• ", 55, doc.y, { continued: true });
    doc.fillColor(palette.body).fontSize(9.5).text(bullet, 65, doc.y, { align: "justify", lineGap: 1.5 });
    doc.moveDown(0.18);
  });
  doc.moveDown(0.2);

  // --- IV - TECHNICAL SKILLS & CORE COMPETENCIES ---
  renderHeading("TECHNICAL SKILLS & CORE COMPETENCIES");
  
  const startY = doc.y;
  let leftY = startY;
  let rightY = startY;

  // Header Left
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(palette.primary).text("Technical Skills", 45, leftY);
  leftY += 13;

  const techSkills = [
    "Advanced Microsoft Excel (Pivot Tables, XLOOKUP, IF, VBA, data validation)",
    "Financial Statement Analysis & Reporting",
    "Risk Identification & Assessment",
    "Quantitative Analysis",
    "Power BI, Tableau, ERP Systems"
  ];
  doc.font("Helvetica").fontSize(9).fillColor(palette.body);
  techSkills.forEach(skill => {
    doc.text("• " + skill, 45, leftY, { width: 245 });
    leftY += doc.heightOfString("• " + skill, { width: 245 }) + 2;
  });

  // Header Right
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(palette.primary).text("Core Competencies", 310, rightY);
  rightY += 13;

  const coreComps = [
    "Credit Risk Awareness",
    "Analytical Thinking & Numerical Ability",
    "Regulatory & Compliance Understanding",
    "Professional Communication"
  ];
  doc.font("Helvetica").fontSize(9).fillColor(palette.body);
  coreComps.forEach(comp => {
    doc.text("• " + comp, 310, rightY, { width: 240 });
    rightY += doc.heightOfString("• " + comp, { width: 240 }) + 2;
  });
  
  doc.y = Math.max(leftY, rightY) + 6;

  // --- V - ADDITIONAL INFORMATION ---
  renderHeading("ADDITIONAL INFORMATION");
  
  const additionalItems = [
    { label: "Certifications", value: "Financial Modelling & Valuation - Grant Thornton; Bloomberg Market Concepts (BMC); Bloomberg Spreadsheet Analysis; Bloomberg ESG; Bloomberg Finance Fundamentals" },
    { label: "Technical exposure", value: "Foundational knowledge of SQL & Python, with experience using AI tools to support analytical workflows" },
    { label: "Academic focus", value: "Treasury & liquidity risk management, credit analysis, financial markets and institutions, ERP-based financial reporting concepts" },
    { label: "Professional development", value: "Ongoing study of UK banking regulation and macroeconomic trends affecting credit and liquidity risk" }
  ];

  additionalItems.forEach(item => {
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor(palette.accent).text("• ", 45, doc.y, { continued: true });
    doc.font("Helvetica-Bold").text(`${item.label}: `, { continued: true, fillColor: palette.primary });
    doc.font("Helvetica").fontSize(9).fillColor(palette.body).text(item.value, { align: "justify", lineGap: 1.5 });
    doc.moveDown(0.28);
  });

  doc.end();
  
  return new Promise((resolve) => {
    stream.on("finish", () => {
      console.log("Resume PDF generated successfully.");
      resolve(true);
    });
  });
}

async function generateTeslaExcel() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Tesla Intrinsic Valuation Model");

  sheet.views = [{ showGridLines: true }];

  // Title Block
  sheet.mergeCells("A2:F2");
  const titleCell = sheet.getCell("A2");
  titleCell.value = "TESLA INC. (TSLA) CORPORATE DCF INTRINSIC VALUATION MODEL";
  titleCell.font = { name: "Arial", size: 14, bold: true, color: { argb: "FFFFFF" } };
  titleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1E293B" } };
  titleCell.alignment = { horizontal: "center", vertical: "middle" };
  sheet.getRow(2).height = 30;

  // Subtitle
  sheet.mergeCells("A3:F3");
  const subtitleCell = sheet.getCell("A3");
  subtitleCell.value = "Structured Workbook with Pro-Forma Cashflows, WACC, and Intrinsic Share Value Calculations";
  subtitleCell.font = { name: "Arial", size: 10, italic: true, color: { argb: "94A3B8" } };
  subtitleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1E293B" } };
  subtitleCell.alignment = { horizontal: "center", vertical: "middle" };
  sheet.getRow(3).height = 18;

  // Section: Pro-Forma Projections
  sheet.getCell("A5").value = "PRO-FORMA FINANCIAL STATEMENT PROJECTIONS";
  sheet.getCell("A5").font = { name: "Arial", size: 11, bold: true, color: { argb: "0F766E" } };

  // Headers
  const headerRow = sheet.getRow(6);
  headerRow.values = [
    "Fiscal Metric ($ Millions)", 
    "2023 (A)", 
    "2024 (A)", 
    "2025 (E)", 
    "2026 (E)", 
    "2027 (E)"
  ];
  headerRow.font = { name: "Arial", size: 10, bold: true, color: { argb: "FFFFFF" } };
  headerRow.eachCell((cell) => {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "0F766E" } };
    cell.alignment = { horizontal: "center", vertical: "middle" };
    cell.border = {
      top: { style: "thin", color: { argb: "0D9488" } },
      bottom: { style: "medium", color: { argb: "0D9488" } }
    };
  });
  headerRow.height = 22;

  // Data rows
  const data = [
    ["Revenue", 96773, 112500, 131250, 152400, 176500],
    ["Revenue Growth (%)", 0.188, 0.1625, 0.1667, 0.1611, 0.1581],
    ["Gross Profit", 17660, 20800, 24500, 28800, 33800],
    ["EBITDA", 13500, 15800, 18900, 22250, 26100],
    ["Free Cash Flow to Firm (FCFF)", 4400, 5200, 6150, 7280, 8600]
  ];

  data.forEach((rowValues, idx) => {
    const row = sheet.getRow(7 + idx);
    row.values = rowValues;
    row.font = { name: "Arial", size: 10 };
    row.getCell(1).alignment = { horizontal: "left" };
    row.getCell(1).font = { name: "Arial", size: 10, bold: true };
    
    // Formatting numbers
    for (let c = 2; c <= 6; c++) {
      const cell = row.getCell(c);
      cell.alignment = { horizontal: "right" };
      if (idx === 1) { // Revenue Growth Row
        cell.numFmt = "0.00%";
      } else {
        cell.numFmt = "$#,##0";
      }
    }
    
    // Bottom border for last data row
    if (idx === data.length - 1) {
      row.eachCell((cell) => {
        cell.border = { bottom: { style: "medium", color: { argb: "CCCCCC" } } };
      });
    }
  });

  // Section 2: Valuation Compilation
  sheet.getCell("A13").value = "INTRINSIC VALUE COMPILATION METRICS";
  sheet.getCell("A13").font = { name: "Arial", size: 11, bold: true, color: { argb: "1E3A8A" } };

  sheet.getCell("A15").value = "Weighted Average Cost of Capital (WACC)";
  sheet.getCell("B15").value = 0.085;
  sheet.getCell("B15").numFmt = "0.00%";

  sheet.getCell("A16").value = "Terminal Growth Rate (g)";
  sheet.getCell("B16").value = 0.025;
  sheet.getCell("B16").numFmt = "0.00%";

  sheet.getCell("A17").value = "Sum of PV of Cash Flows ($ Millions)";
  sheet.getCell("B17").value = 27450;
  sheet.getCell("B17").numFmt = "$#,##0";

  sheet.getCell("A18").value = "Terminal Value ($ Millions)";
  sheet.getCell("B18").value = 146800;
  sheet.getCell("B18").numFmt = "$#,##0";

  sheet.getCell("A19").value = "Enterprise Value ($ Millions)";
  sheet.getCell("B19").value = { formula: "B17+B18" };
  sheet.getCell("B19").numFmt = "$#,##0";

  sheet.getCell("A20").value = "Cash & Equivalents ($ Millions)";
  sheet.getCell("B20").value = 29100;
  sheet.getCell("B20").numFmt = "$#,##0";

  sheet.getCell("A21").value = "Total Debt ($ Millions)";
  sheet.getCell("B21").value = 4800;
  sheet.getCell("B21").numFmt = "$#,##0";

  sheet.getCell("A22").value = "Implied Equity Value ($ Millions)";
  sheet.getCell("B22").value = { formula: "B19+B20-B21" };
  sheet.getCell("B22").numFmt = "$#,##0";
  sheet.getCell("B22").font = { bold: true };

  sheet.getCell("A23").value = "Diluted Shares Outstanding (Millions)";
  sheet.getCell("B23").value = 3180;
  sheet.getCell("B23").numFmt = "#,##0";

  sheet.getCell("A24").value = "Implied Intrinsic Share Price ($)";
  sheet.getCell("B24").value = { formula: "B22/B23" };
  sheet.getCell("B24").numFmt = "$#,##0.00";
  sheet.getCell("B24").font = { bold: true, color: { argb: "FFFFFF" } };
  sheet.getCell("B24").fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1E3A8A" } };

  // Alignments on Column B
  for (let r = 15; r <= 24; r++) {
    sheet.getCell(`B${r}`).alignment = { horizontal: "right" };
    sheet.getCell(`A${r}`).font = { name: "Arial", size: 10, bold: r === 24 || r === 22 };
    if (r !== 24) {
      sheet.getCell(`B${r}`).font = { name: "Arial", size: 10, bold: r === 22 };
    }
  }

  // Auto fit columns
  sheet.columns.forEach((column) => {
    let maxLen = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const valLen = cell.value ? String(cell.value).length : 0;
      if (valLen > maxLen) maxLen = valueLength(cell.value);
    });
    column.width = Math.max(maxLen + 4, 15);
  });

  function valueLength(val) {
    if (typeof val === "object" && val.formula) {
      return 15;
    }
    return String(val || "").length;
  }

  const uploadDir = path.join(process.cwd(), "public", "assets");
  await workbook.xlsx.writeFile(path.join(uploadDir, "Tesla_DCF_Valuation_Model.xlsx"));
  console.log("Tesla Excel saved successfully.");
}

async function generateBarclaysExcel() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Barclays Valuation Model");

  sheet.views = [{ showGridLines: true }];

  // Title Block
  sheet.mergeCells("A2:F2");
  const titleCell = sheet.getCell("A2");
  titleCell.value = "BARCLAYS PLC CORPORATE EQUITY VALUATION MODEL";
  titleCell.font = { name: "Arial", size: 14, bold: true, color: { argb: "FFFFFF" } };
  titleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1E3A8A" } };
  titleCell.alignment = { horizontal: "center", vertical: "middle" };
  sheet.getRow(2).height = 30;

  // Subtitle
  sheet.mergeCells("A3:F3");
  const subtitleCell = sheet.getCell("A3");
  subtitleCell.value = "Analysis of Capital Structure, Balance Sheet Ratios, and Key Banking Profitability Indicators";
  subtitleCell.font = { name: "Arial", size: 10, italic: true, color: { argb: "93C5FD" } };
  subtitleCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1E3A8A" } };
  subtitleCell.alignment = { horizontal: "center", vertical: "middle" };
  sheet.getRow(3).height = 18;

  // Headers
  const headerRow = sheet.getRow(5);
  headerRow.values = [
    "Balance Sheet Metric (GBP Millions)",
    "2023 (A)", 
    "2024 (A)", 
    "2025 (E)", 
    "2026 (E)", 
    "2027 (E)"
  ];
  headerRow.font = { name: "Arial", size: 10, bold: true, color: { argb: "FFFFFF" } };
  headerRow.eachCell((cell) => {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "1D4ED8" } }; // Barclays Blue
    cell.alignment = { horizontal: "center", vertical: "middle" };
  });
  headerRow.height = 22;

  // Core metrics
  const sheetData = [
    ["Total Assets", 1577000, 1620000, 1668000, 1720000, 1775000],
    ["Total Liabilities", 1508000, 1548000, 1592000, 1640000, 1691000],
    ["Total Equity", 69000, 72000, 76000, 80000, 84000],
    ["Net Interest Income (NII)", 12700, 13500, 14400, 15300, 16200],
    ["Non-Interest Income", 12300, 12800, 13400, 14000, 14600],
    ["Operating Expenses", 16100, 16550, 17100, 17680, 18250],
    ["Pre-Tax Profit", 6600, 7355, 8200, 9020, 9950]
  ];

  sheetData.forEach((rowValues, idx) => {
    const row = sheet.getRow(6 + idx);
    row.values = rowValues;
    row.font = { name: "Arial", size: 10 };
    row.getCell(1).alignment = { horizontal: "left" };
    row.getCell(1).font = { name: "Arial", size: 10, bold: true };
    
    for (let c = 2; c <= 6; c++) {
      const cell = row.getCell(c);
      cell.alignment = { horizontal: "right" };
      cell.numFmt = "£#,##0";
    }
  });

  // Banking stability indexes block
  const offset = 6 + sheetData.length + 2;
  sheet.getCell(`A${offset}`).value = "BANKING QUALITY & LIQUIDITY BENCHMARKS";
  sheet.getCell(`A${offset}`).font = { name: "Arial", size: 11, bold: true, color: { argb: "047857" } };

  const benchHeader = sheet.getRow(offset + 1);
  benchHeader.values = [
    "Stability Metrics (%)", 
    "2023 (A)", 
    "2024 (A)", 
    "2025 (E)", 
    "2026 (E)", 
    "2027 (E)"
  ];
  benchHeader.font = { name: "Arial", size: 10, bold: true, color: { argb: "FFFFFF" } };
  benchHeader.eachCell((cell) => {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "047857" } };
    cell.alignment = { horizontal: "center", vertical: "middle" };
  });

  const stabilityData = [
    ["Common Equity Tier 1 (CET1)", 0.138, 0.140, 0.142, 0.1435, 0.145],
    ["Return on Tangible Equity (RoTE)", 0.09, 0.102, 0.108, 0.112, 0.116],
    ["Liquidity Coverage Ratio (LCR)", 1.62, 1.65, 1.67, 1.68, 1.70],
    ["Cost-to-Income Ratio (%)", 0.644, 0.629, 0.615, 0.603, 0.593]
  ];

  stabilityData.forEach((rowValues, idx) => {
    const row = sheet.getRow(offset + 2 + idx);
    row.values = rowValues;
    row.font = { name: "Arial", size: 10 };
    row.getCell(1).alignment = { horizontal: "left" };
    row.getCell(1).font = { name: "Arial", size: 10, bold: true };
    
    for (let c = 2; c <= 6; c++) {
      const cell = row.getCell(c);
      cell.alignment = { horizontal: "right" };
      cell.numFmt = "0.00%";
    }
  });

  // Fit column widths
  sheet.columns.forEach((column) => {
    let maxLen = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      const valLen = cell.value ? String(cell.value).length : 0;
      if (valLen > maxLen) maxLen = valLen;
    });
    column.width = Math.max(maxLen + 4, 15);
  });

  const uploadDir = path.join(process.cwd(), "public", "assets");
  await workbook.xlsx.writeFile(path.join(uploadDir, "Barclays_Valuation_Model.xlsx"));
  console.log("Barclays Excel saved successfully.");
}

async function main() {
  try {
    await generateResume();
    await generateTeslaExcel();
    await generateBarclaysExcel();
    console.log("All robust assets compiled and written to public/assets!");
  } catch (error) {
    console.error("Failure compiling static high-fidelity assets:", error);
  }
}

main();
