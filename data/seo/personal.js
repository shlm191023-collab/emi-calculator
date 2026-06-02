import base from "./base";

const personalSeo = [
  {
    type: "intro",
    title: "EMI Calculation Guide",
    content: [
      "A Personal Loan EMI Calculator helps you plan your monthly payments before taking a loan.",
      "This tool gives you an instant view of EMI, total interest, and total repayment for your chosen loan amount, rate, and tenure.",
    ],
  },

  {
    type: "definition",
    title: "💡 What is a Personal Loan EMI?",
    content: [
      "A Personal Loan EMI is the fixed amount you pay every month to repay your personal loan, including principal and interest.",
    ],
    items: ["Principal amount (loan amount)", "Interest charged by the lender"],
    note: "A personal loan EMI stays the same throughout the loan tenure.",
  },

  {
    type: "example",
    title: "📊 Example of Personal Loan EMI Calculation",
    items: [
      "Loan Amount: ₹5,00,000",
      "Interest Rate: 12% per annum",
      "Tenure: 3 years",
      "Monthly EMI: ₹16,619",
      "Total Interest Paid: ₹1,97,084",
    ],
    note: "This illustrates how interest contributes to your total repayment.",
  },

  base.formula("Personal Loan"),

  {
    type: "cta",
    title: "💡 Ready to compare EMI options?",
    button: "🔥 Check Best Personal Loan Rates →",
  },

  {
    type: "benefits",
    title: "🚀 Benefits of Using a Personal Loan EMI Calculator",
    items: [
      "Calculate EMI instantly without manual math.",
      "Compare different interest rates and tenures.",
      "Find the monthly payment that fits your budget.",
      "See how tenure changes total interest paid.",
    ],
  },

  {
    type: "list",
    title: "🏦 Typical Personal Loan Interest Rates in India",
    content: ["Personal loan rates vary by lender and profile. Common rates include:"],
    items: [
      "8.99% – 13.5% for good credit ratings",
      "10.5% – 15% for average credit ratings",
      "15%+ for lower credit profiles",
    ],
    note: "Higher credit scores lead to lower EMI and interest costs.",
  },

  {
    type: "factors",
    title: "📈 Factors Affecting Personal Loan EMI",
    content: ["Several factors influence your EMI amount:"],
    items: [
      "Loan Amount --> Larger loans increase EMI.",
      "Interest Rate --> Lower rates reduce EMI.",
      "Tenure --> Longer tenure lowers EMI but raises total interest.",
      "Credit Score --> Better scores get better rates.",
    ],
  },

  base.useCalc("personal loan"),
  base.final("Personal loan"),
  base.faq("personal loan"),
];

export default personalSeo;
