import base from "./base";

const loanSeo = [
  {
    type: "intro",
    title: "EMI Calculator Guide",
    content: [
      "A loan EMI calculator helps you quickly estimate monthly payments for any loan amount.",
      "Enter your loan details and see instant EMI, total interest, and total repayment values.",
    ],
  },
  {
    type: "definition",
    title: "💡 What is an EMI?",
    content: [
      "An EMI (Equated Monthly Installment) is the fixed monthly payment made to repay a loan.",
    ],
    items: ["Principal amount (loan amount)", "Monthly interest charged by the lender"],
    note: "EMIs are calculated so that your loan is paid off in fixed payments over the loan tenure.",
  },
  {
    type: "example",
    title: "📊 Example of EMI Calculation",
    items: [
      "Loan Amount: ₹5,00,000",
      "Interest Rate: 10% per annum",
      "Tenure: 5 years",
      "Monthly EMI: ₹10,624",
      "Total Interest Paid: ₹1,37,430",
    ],
    note: "This example shows how interest affects your total repayment.",
  },
  base.formula("Loan"),
  {
    type: "cta",
    title: "💡 Ready to compare loan EMIs?",
    button: "🔥 Check Best Loan Offers →",
  },
  {
    type: "benefits",
    title: "🚀 Why Use a Loan EMI Calculator",
    items: [
      "Instant EMI results without manual formulas.",
      "Better planning with exact monthly payment values.",
      "Compare different loan amounts and tenures.",
    ],
  },
  {
    type: "tips",
    title: "💡 Loan EMI Tips",
    items: [
      "Choose a tenure that balances monthly affordability and total interest.",
      "Lower interest rates reduce your EMI and total repayment.",
      "Make a higher down payment if possible to reduce the loan amount.",
    ],
  },
  base.useCalc("loan"),
  base.final("loan"),
  base.faq("loan"),
];

export default loanSeo;
