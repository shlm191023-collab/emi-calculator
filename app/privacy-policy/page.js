import LastUpdated from "@/components/LastUpdated";
export default function Privacy() {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      
      <LastUpdated />

      <p>
        This website (<strong>emicalculatorindia.com</strong>) respects your
        privacy. We do not collect personally identifiable information unless you
        voluntarily provide it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Basic usage data (pages visited, time spent)</li>
        <li>Device/browser information</li>
        <li>Anonymous analytics data</li>
      </ul>

      <h2>How we use data</h2>
      <ul>
        <li>Improve user experience</li>
        <li>Analyze performance and traffic</li>
        <li>Optimize content and features</li>
      </ul>

      <h2>Cookies</h2>
      <p>
        We may use cookies to enhance functionality and analyze traffic. You can
        disable cookies in your browser settings.
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site may contain links to third-party websites (loan providers,
        partners). We are not responsible for their privacy practices.
      </p>

      <h2>Consent</h2>
      <p>
        By using this website, you consent to this privacy policy.
      </p>
    </div>
  );
}