import base from "./base";

const carSeo = [
  {
    type: "intro",
    title: "EMI Calculation Guide",
    content: [
      "Buying a car is a big milestone, but managing your finances wisely is even more important. A Car Loan EMI Calculator helps you understand exactly how much you need to pay every month before taking a loan.",
      "With rising car prices and varying interest rates in India, using an Car Loan EMI Calculator is the smartest way to plan your purchase. Whether you are buying a new car or a used one, knowing your EMI in advance can save you from financial stress.",
    ],
  },

  {
    type: "definition",
    title: "💡 What is a Car Loan EMI?",
    content: [
      "A Car Loan EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay your car loan. It includes:",
    ],
    items: ["Principal amount (loan amount)", "Interest charged by bank"],
    note: "Each EMI reduces your loan balance gradually until it is fully repaid.",
  },
  {
    type: "example",
    title: "📊 Example of Car Loan EMI Calculation",
    items: [
      "Loan Amount: ₹8,00,000",
      "Interest Rate: 9% per annum",
      "Tenure: 5 years",
      "Monthly EMI: ₹16,607",
      "Total Interest Paid: ₹1,96,401",
    ],
    note: "This shows how interest adds up over time.",
  },

  base.formula("Car Loan"),

  {
    type: "cta",
    title: "💡 Found your EMI? Save money now!",
    button: "🔥 Get Lowest EMI Offers →",
  },

  {
    type: "benefits",
    title: "🚀 Benefits of Using a Car Loan EMI Calculator",
    items: [
      "Instant EMI calculation --> You can calculate EMI within seconds without complex formulas.",
      "Better Budget Planning --> Know exactly how much you can afford before applying for a loan.",
      "Compare Loan Options --> Try different Loan amounts, Interest rates, Tenures and find the best combination that suits your budget.",
      "Avoid Overpaying Interest --> Choosing a shorter tenure can reduce total interest paid.",
    ],
  },

  {
    type: "list",
    title: "🏦 Car Loan Interest Rates in India (2026)",
    content: [
      "Interest rates vary depending on the bank and your profile. Here is a quick comparison of current car loan interest rates from top banks:",
    ],
    items: [
      "SBI --> 8.5% – 9.5%",
      "HDFC --> 8.75% – 9.75%",
      "ICICI --> 8.9% – 9.9%",
      "Axis --> 8.5% – 9.5%",
    ],
    note: "Your credit score and income play a major role in determining your rate.",
  },
  {
    type: "factors",
    title: "📈 Factors Affecting Car Loan EMI",
    content: ["Several factors influence your car loan EMI amount:"],
    items: [
      "Loan Amount --> Higher loan amounts lead to higher EMIs.",
      "Interest Rate --> Higher interest rates increase your EMI.",
      "Tenure --> Longer tenures result in lower EMIs but higher total interest.",
      "Down Payment --> A larger down payment reduces the loan amount and thus the EMI.",
      "Credit Score --> A good credit score can help you secure a lower interest rate, which in turn reduces your EMI.",
    ],
  },
  {
    type: "list",
    title: "⚖️ Short Tenure vs Long Tenure",
    items: [
      "Short Tenure --> Higher EMI, Lower interest, Faster repayment",
      "Long Tenure --> Lower EMI, Higher total interest, Easier monthly burden"
    ],
    note: "👉 Choose based on your income stability.",
  },
  {
    type: "eligibility",
    title: "📋 Eligibility for Car Loan in India",
    content: ["To apply for a car loan, you typically need:"],
    items: [
      "Age --> 21–65 years",
      "Income --> Stable source of income to meet EMI obligations.",
      "Credit Score --> A good credit score can help you secure a lower interest rate.",
      "KYC documents --> Identity proof, address proof, income proof, and bank statements.",
    ],
  },
  {
    type: "documentsrequired",
    title: "📋 Documents Required for Car Loan in India",
    items: [
      "PAN Card --> Permanent Account Number for identity verification.",
      "Aadhaar Card --> Government-issued ID for address verification.",
      "Income Proof --> Salary slips, Form 16, or other documents proving stable income.",
      "Bank statements --> Typically for the last 3 to 6 months to assess financial stability.",
      "Address proof --> Utility bills, rental agreement, or any government-issued document showing your current address.",
      "Passport size photographs",
    ],
  },
  {
    type: "tips",
    title: "💡 Tips to Get the Best Car Loan",
    items: [
      "Improve your credit score --> Pay bills on time and reduce existing debt to boost your credit score.",
      "Compare lenders --> Don’t settle for the first offer. Compare interest rates and terms from multiple lenders.",
      "Increase down payment --> A larger down payment can reduce your loan amount and EMI.",
      "Choose optimal tenure --> Select a tenure that balances your monthly budget and total interest paid.",
      "Negotiate with the bank --> Sometimes, you can negotiate for a better interest rate or waive off processing fees.",
    ],
  },
  base.useCalc("car loan"),
  base.final("Car loan"),
  base.faq("car loan"),
];

export default carSeo;
