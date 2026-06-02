const baseSections = {
  formula: (loanType) => ({
    type: "formula",
    title: `🧮 ${loanType} EMI Formula`,
    formula: "EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]",
    extra: [
      "P = Loan amount",
      "r = Monthly interest rate",
      "n = Loan tenure (months)",
    ],
  }),

  faq: (loanType) => ({
    type: "faq",
    title: "❓ Frequently Asked Questions",
    items: [
      {
        q: `What is a good EMI for a ${loanType}?`,
        a: "Ideally, your EMI should not exceed 20–25% of your monthly income.",
      },
      {
        q: `Can I prepay my ${loanType}?`,
        a: "Yes, most banks allow prepayment. Check for any prepayment penalties.",
      },
      {
        q: `How to reduce my ${loanType} EMI?`,
        a: " You can increase your down payment, choose a longer tenure, improve your credit score for a better interest rate, or negotiate for a lower interest rate to reduce your EMI.",
      },
      {
        q: "Is it better to take a longer tenure?",
        a: "It depends on your financial situation. A longer tenure reduces monthly EMI but increases the total interest paid over the loan period. Shorter tenure saves interest.",
      },
      {
        q: "What credit score is needed?",
        a: "A credit score of 750 or above is generally preferred by lenders for better interest rates and approval.",
      },
      {
        q: `Can I get a ${loanType} with a low credit score?`,
        a: "It may be difficult, but some lenders offer loans to individuals with low credit scores at higher interest rates. Improving your credit score can help you get better loan terms.",
      },
    ],
  }),

  useCalc: (loanType) => ({
    type: "useCalc",
    title: `🔍 Why Use Our ${loanType} EMI Calculator?`,
    content: [
      "✅ User-Friendly Interface --> Easy to input your loan details.",
      "✅ Instant & Accurate Results --> Our calculator uses the standard RBI EMI formula for precise calculations.",
      "✅ Amortization Schedule PDF Download --> Save your detailed calculations for future reference.",
    ],
  }),

  final: (loanType) => ({
    type: "final",
    title: "🚗 Final Thoughts",
    content: [
      `${loanType} can make your dream affordable, but only if you plan it wisely.Using a ${loanType} EMI Calculator ensures that you stay within your budget and avoid financial stress.`,
      "Before applying for a loan, always:",
      "✅ Compare interest rates from different lenders.",
      "✅ Calculate your EMI to understand monthly obligations.",
      "✅ Consider the total repayment amount over the loan tenure.",
      "Smart planning today leads to stress-free payments tomorrow.",
    ],
  }),
};

export default baseSections;
