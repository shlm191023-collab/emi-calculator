"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ type }) {
  const moreLinks = [
    { label: "₹5L Loan", href: "/emi/500000" },
    { label: "₹2L Loan", href: "/emi/200000" },
    { label: "₹3L Loan", href: "/emi/300000" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const leaveTimerRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // helpers to keep dropdown open when moving between trigger and menu
  const handleMouseEnter = () => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    // small delay to allow moving into menu without closing
    // make delay more forgiving
    leaveTimerRef.current = setTimeout(() => setOpen(false), 400);
  };

  return (
    <div className="navbar">

      {/* ALWAYS VISIBLE */}
      <Link href="/">Home</Link>

      {type === "car" && (
        <>
          <Link href="/home-loan-emi-calculator">Home Loan</Link>
          <Link href="/personal-loan-emi-calculator">Personal Loan</Link>
        </>
      )}

      {type === "personal" && (
        <>
          <Link href="/car-loan-emi-calculator">Car Loan</Link>
          <Link href="/home-loan-emi-calculator">Home Loan</Link>
        </>
      )}

      {type === "home" && (
        <>
          <Link href="/car-loan-emi-calculator">Car Loan</Link>
          <Link href="/personal-loan-emi-calculator">Personal Loan</Link>
        </>
      )}

      {type === "loan" && (
        <>
          <Link href="/car-loan-emi-calculator">Car Loan</Link>
          <Link href="/personal-loan-emi-calculator">Personal Loan</Link>
          <Link href="/home-loan-emi-calculator">Home Loan</Link>
        </>
      )}

      <Link href="/emi/1000000">₹10L Loan</Link>

      {/* 🔥 MORE DROPDOWN (click to toggle) */}
      <div
        className={`dropdown ${open ? "open" : ""}`}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className="nav_more"
          onClick={() => setOpen((v) => !v)}
          role="button"
          tabIndex={0}
        >
          More ▾
        </span>

        <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {moreLinks.map((item, i) => (
            <Link key={i} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}