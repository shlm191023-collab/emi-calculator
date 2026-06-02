import LastUpdated from "@/components/LastUpdated";
export default function Disclaimer() {
  return (
    <div className="legal-page">
      <h1>Disclaimer</h1>

      <LastUpdated />
      
      <p>
        The EMI calculations provided on this website are estimates based on
        standard formulas. Actual EMI values may differ based on lender terms,
        fees, and policies.
      </p>

      <h2>Affiliate disclosure</h2>
      <p>
        Some links on this website are affiliate links. If you click and apply
        for a loan, we may earn a commission at no additional cost to you.
      </p>

      <p>
        This helps us keep the tool free for users.
      </p>
    </div>
  );
}