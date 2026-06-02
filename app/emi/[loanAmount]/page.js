import Navbar from "@/components/Navbar";
import EmiClientLoader from "@/components/EmiClientLoader";

function parseLoanAmount(value) {
  const raw = String(value || "").replace(/,/g, "").trim();
  const number = Number(raw);
  return Number.isFinite(number) ? Math.round(number) : null;
}

export async function generateMetadata({ params }) {
  const p = await params;
  const amount = parseLoanAmount(p.loanAmount);
  const currentYear = new Date().getFullYear();
  const formatted = amount
    ? amount >= 100000
      ? `₹${amount / 100000}L`
      : `₹${amount}`
    : "Loan";

  return {
    title: amount
      ? `${formatted} Loan EMI Calculator India ${currentYear}`
      : `Loan EMI Calculator India ${currentYear}`,
    description: amount
      ? `Calculate your EMI for a ${formatted} loan instantly with our free calculator.`
      : "Calculate your loan EMI instantly with our free calculator.",
  };
}

export default async function Page({ params }) {
  const p = await params;
  const amount = parseLoanAmount(p.loanAmount) ?? 500000;

  return (
    <div className="emi-loan-page">
      <Navbar type="loan" />
      <EmiClientLoader key={amount} type="loan" initialLoan={amount} />
    </div>
  );
}
