import LastUpdated from "@/components/LastUpdated";
export default function About() {
  return (
    <div className="legal-page">
      <h1>About EMI Calculator India</h1>
      
      <LastUpdated />
      
      <p>
        <strong>EMI Calculator India</strong> is an independent financial tools
        website built to help users estimate loan EMIs quickly and make
        informed borrowing decisions.
      </p>

      <p>
        Our calculator uses the standard reducing balance method followed by Indian
        banks and financial institutions. The results are intended to give you a
        clear estimate of monthly payments, total interest, and repayment
        structure.
      </p>

      <h2>What we offer</h2>
      <ul>
        <li>Instant EMI calculation for all types of loans</li>
        <li>Detailed amortization schedules </li>
        <li>Downloadable report for planning</li>
      </ul>

      <h2>Independence & monetization</h2>
      <p>
        We may partner with lenders and financial platforms. If you click certain
        links and take action, we may earn a commission. This does not affect the
        calculator results or the information presented.
      </p>

      <h2>Our goal</h2>
      <p>
        To simplify loan planning and help users avoid overpaying interest
        through better financial awareness.
      </p>
    </div>
  );
}