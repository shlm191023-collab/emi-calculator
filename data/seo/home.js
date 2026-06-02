import base from "./base";

const homeSeo = [
  {
    type: "intro",
    title: "EMI Calculation Guide",
    content: [
      "A Home Loan EMI Calculator helps you estimate your monthly mortgage payments before applying for a home loan.",
      "It gives you a quick understanding of EMI, total interest, and total cost based on home loan amount, rate, and tenure.",
    ],
  },

  {
    type: "definition",
    title: "💡 What is a Home Loan EMI?",
    content: [
      "A Home Loan EMI is the fixed monthly payment you make to repay your home loan, including principal and interest.",
    ],
    items: ["Principal amount (loan amount)", "Interest charged by the bank"],
    note: "A home loan EMI is typically paid every month until the loan is fully repaid.",
  },

  {
    type: "example",
    title: "📊 Example of Home Loan EMI Calculation",
    items: [
      "Loan Amount: ₹20,00,000",
      "Interest Rate: 8.5% per annum",
      "Tenure: 15 years",
      "Monthly EMI: ₹19,714",
      "Total Interest Paid: ₹17,54,452",
    ],
    note: "This example shows how longer tenure affects total interest.",
  },

  base.formula("Home Loan"),

  {
    type: "cta",
    title: "💡 Ready to find the best home loan deal?",
    button: "🔥 Check Best Home Loan Offers →",
  },

  {
    type: "benefits",
    title: "🚀 Benefits of Using a Home Loan EMI Calculator",
    items: [
      "Estimate monthly mortgage payments quickly.",
      "Plan your budget with real EMI figures.",
      "Compare different interest rates and tenures.",
      "Understand how much interest you will pay over time.",
    ],
  },

  {
    type: "list",
    title: "🏦 Home Loan Interest Rates in India (2026)",
    content: ["Current home loan rates typically range from:"],
    items: [
      "7.75% – 9.25% for salaried borrowers",
      "8.0% – 9.5% for self-employed borrowers",
      "9.0% – 10.0% for lower credit profiles",
    ],
    note: "The final rate depends on your income, credit score, and lender offer.",
  },

  {
    type: "factors",
    title: "📈 Factors Affecting Home Loan EMI",
    content: ["Key factors that change your EMI:"],
    items: [
      "Loan Amount --> More loan increases EMI.",
      "Interest Rate --> Lower rates reduce EMI.",
      "Tenure --> Longer tenure lowers EMI but raises total interest.",
      "Down Payment --> Higher down payment reduces loan amount.",
    ],
  },

  base.useCalc("home loan"),
  base.final("Home loan"),
  base.faq("home loan"),
];

export default homeSeo;
