"use client";

export function generateSchedule(P, annualRate, years) {
  const r = annualRate / 12 / 100;
  const n = years * 12;

  // ✅ EMI (NO ROUNDING)
  const emi =
    r === 0
      ? P / n
      : (P * r * Math.pow(1 + r, n)) /
        (Math.pow(1 + r, n) - 1);

  let balance = P;
  const schedule = [];

  const today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth();

  for (let i = 0; i < n; i++) {
    const date = new Date(currentYear, currentMonth + i);

    let interest = balance * r;          // ❌ NO rounding
    let principal = emi - interest;      // ❌ NO rounding

    // ✅ FIX LAST MONTH
    if (i === n - 1) {
      principal = balance;
      interest = emi - principal;
      balance = 0;
    } else {
      balance = balance - principal;
    }

    schedule.push({
      date,
      emi,
      principal,
      interest,
      balance,
    });
  }

  return schedule;
}