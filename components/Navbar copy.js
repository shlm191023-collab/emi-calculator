export default function Navbar({ type }) {
  return (
    <div className="navbar">
      <a href="./emi-calculator.html">Home</a>

      {type === "car" && (
        <>
          <a href="./home-loan-emi-calculator.html">Home Loan</a>
          <a href="./personal-loan-emi-calculator.html">Personal Loan</a>
        </>
      )}

      {type === "personal" && (
        <>
          <a href="./car-loan-emi-calculator.html">Car Loan</a>
          <a href="./home-loan-emi-calculator.html">Home Loan</a>
        </>
      )}

      <a href="./ten-lakh-emi-calculator.html">₹10L Loan</a>
      <a href="./contact.html">Contact</a>
    </div>
  );
}