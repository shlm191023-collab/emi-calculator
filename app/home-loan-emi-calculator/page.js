import Navbar from "@/components/Navbar";
import EmiClientLoader from "@/components/EmiClientLoader";

const currentYear = new Date().getFullYear();

export const metadata = {
  title: `Home Loan EMI Calculator India ${currentYear} - Calculate EMI Instantly`,
  description:
    "Calculate your EMI instantly using our free EMI calculator for home loans.",
};

export default function Page() {
  return (
    <div className="home-loan">
      <Navbar type="home" />
      <EmiClientLoader type="home" />
    </div>
  );
}
