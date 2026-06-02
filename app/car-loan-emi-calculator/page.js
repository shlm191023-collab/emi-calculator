import Navbar from "@/components/Navbar";
import EmiClientLoader from "@/components/EmiClientLoader";

const currentYear = new Date().getFullYear();

export const metadata = {
  title: `Car Loan EMI Calculator India ${currentYear} - Calculate EMI Instantly`,
  description:
    "Calculate your EMI instantly using our free EMI calculator.",
};

export default function Page() {
  return (
    <div className="car-loan">
      <Navbar type="car" />
      <EmiClientLoader type="car" />      
    </div>
  );
}
