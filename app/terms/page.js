import LastUpdated from "@/components/LastUpdated";
export default function Terms() {
  return (
    <div className="legal-page">
      <h1>Terms of Use</h1>

      <LastUpdated />

      <p>
        By using this website, you agree to the following terms:
      </p>

      <h2>Informational purpose</h2>
      <p>
        The EMI calculator is provided for general informational purposes only.
        It does not constitute financial advice.
      </p>

      <h2>No guarantees</h2>
      <p>
        We do not guarantee the accuracy or completeness of results. Actual loan
        terms may vary depending on the lender.
      </p>

      <h2>User responsibility</h2>
      <p>
        You are responsible for verifying loan details with your bank or lender
        before making financial decisions.
      </p>

      <h2>External links</h2>
      <p>
        We may include links to third-party websites. We are not responsible for
        their content or services.
      </p>
    </div>
  );
}