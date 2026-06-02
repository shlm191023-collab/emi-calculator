/*import Navbar from "@/components/Navbar";
import EmiCalculator from "@/components/EmiCalculator";
import SEOContent from "@/components/SEOContent";

export const metadata = {
  title: "Personal Loan EMI Calculator India 2026 - Calculate EMI Instantly",
  description:
    "Calculate your EMI instantly using our free EMI calculator. Get accurate monthly payments in seconds.",
};

export default function Page() {
  return (
    <div className="personal-loan">
      <Navbar type="personal" />
      <EmiCalculator type="personal" />
      <SEOContent type="personal" />
    </div>
  );
} */


  import Navbar from "@/components/Navbar";
  import EmiClientLoader from "@/components/EmiClientLoader";
  
  const currentYear = new Date().getFullYear();
  
  export const metadata = {
    title: `Personal Loan EMI Calculator India ${currentYear} - Calculate EMI Instantly`,
    description:
      "Calculate your EMI instantly using our free EMI calculator.",
  };
  
  export default function Page() {
    return (
      <div className="personal-loan">
        <Navbar type="personal" />
        <EmiClientLoader type="personal" />      
      </div>
    );
  }
  