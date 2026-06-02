"use client";

import { useEffect, useState, useRef } from "react";

export default function useEmiCalculator(defaults) {
  const [loan, setLoan] = useState(defaults.loan);
  const [rate, setRate] = useState(defaults.rate);
  const [years, setYears] = useState(defaults.years);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const [error, setError] = useState(false);
  const [toast, setToast] = useState("");

  const timerRef = useRef(null);

  // ===== FORMAT =====
  const formatIndianNumber = (num) => {
    return Number(num).toLocaleString("en-IN");
  };

  const formatCurrency = (num) => {
    return "₹" + Math.round(num).toLocaleString("en-IN");
  };

  // ===== VALIDATION (PURE) =====
  const isValidLoan = (val) => val && val >= 50000;

  // ===== EMI CALC =====
  useEffect(() => {
    if (!isValidLoan(loan)) {
      setError(true);
      setToast("Minimum value must be ₹50,000");

      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => setToast(""), 2500);
      return;
    }

    setError(false);

    const P = loan;
    const r = rate / 12 / 100;
    const n = years * 12;

    let emiVal;

    if (r === 0) {
      emiVal = P / n;
    } else {
      emiVal = (P * r * Math.pow(1 + r, n)) /
               (Math.pow(1 + r, n) - 1);
    }

    const totalPay = emiVal * n;
    const totalInt = totalPay - P;

    setEmi(Math.round(emiVal));
    setTotalInterest(Math.round(totalInt));
    setTotalPayment(Math.round(totalPay));
  }, [loan, rate, years]);

  return {
    loan,
    setLoan,
    rate,
    setRate,
    years,
    setYears,
    emi,
    totalInterest,
    totalPayment,
    error,
    toast,
    formatCurrency,
    formatIndianNumber,
  };
}