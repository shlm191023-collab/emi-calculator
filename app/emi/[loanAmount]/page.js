import Navbar from "@/components/Navbar";
import EmiClientLoader from "@/components/EmiClientLoader";

export async function generateMetadata({ params }) {
  const amount = Number(params.loanAmount);
  const formatted = amount >= 100000 ? `₹${amount / 100000}L` : `₹${amount}`;
  const currentYear = new Date().getFullYear();
  
  return {
    title: `${formatted} Loan EMI Calculator India ${currentYear}`,
    description: `Calculate your EMI for a ${formatted} loan instantly with our free calculator.`,
  };
}

export default function Page({ params }) {
  const amount = Number(params.loanAmount);

  return (
    <div className="emi-loan-page">
      <Navbar type="loan" />
      <EmiClientLoader type="loan" initialLoan={amount} />
    </div>
  );
}
