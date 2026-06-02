import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP TRUST STRIP */}
      <div className="footer-trust">
        <span>✔ Accurate EMI based on RBI formula &nbsp;&nbsp; </span>   
        <span>✔ 100% free & trustworthy &nbsp;&nbsp; </span>
        <span>✔ Instant results with detailed breakdown &nbsp;&nbsp; </span>
      </div>

      {/* 🔗 LEGAL LINKS */}
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms">Terms of Use</Link>
        <Link href="/disclaimer">Disclaimer</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* COPYRIGHT */}
      <p className="footer-copy">
        © 2026 EMI Calculator India • All rights reserved
      </p>
    </footer>
  );
}