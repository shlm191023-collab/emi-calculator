"use client";

import useEmiCalculator from "./useEmiCalculator";
import AmortizationTable from "./AmortizationTable";
import useCtaPulse from "./useCtaPulse";
import EmiChart from "./EmiChart";
import SeoSection from "./SEOSection";
import { seoMap } from "@/data/seo";
import { useState, useEffect } from "react";

export default function EmiCalculator({ type, initialLoan }) {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    let scrollTimer;
    let idleTimer;

    const handleActivity = () => {
      setShowSticky(true);

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setShowSticky(false);
      }, 5000);
    };

    const handleScroll = () => {
      handleActivity();

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setShowSticky(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);

  const defaults = {
    loan:
      typeof initialLoan === "number" && initialLoan > 0
        ? Math.round(initialLoan)
        : type === "personal"
        ? 500000
        : type === "home"
        ? 2000000
        : type === "loan"
        ? 500000
        : 800000,
    rate:
      type === "personal"
        ? 12
        : type === "home"
        ? 8.5
        : type === "loan"
        ? 10
        : 9,
    years:
      type === "personal"
        ? 3
        : type === "home"
        ? 15
        : type === "loan"
        ? 5
        : 5,
  };

  const {
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
  } = useEmiCalculator(defaults);

  // Keep a separate text state for the loan input so we avoid
  // calling `toLocaleString` during server render (Node may not
  // produce the same localized string as the browser). We format
  // the value on the client via useEffect to prevent hydration
  // mismatches.
  const [loanText, setLoanText] = useState(() => {
    const val = defaults.loan;
    return typeof val === "number" ? String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : String(val);
  });

  const [rateText, setRateText] = useState(() => String(defaults.rate));
  const [yearsText, setYearsText] = useState(() => String(defaults.years));

  useEffect(() => {
    if (typeof loan === "number" && loan > 0) {
      setLoanText(formatIndianNumber(loan));
    }
  }, [loan, formatIndianNumber]);

  useEffect(() => {
    if (typeof rate === "number" && rate > 0) {
      setRateText(String(rate));
    }
  }, [rate]);

  useEffect(() => {
    if (typeof years === "number" && years > 0) {
      setYearsText(String(years));
    }
  }, [years]);

  // ✅ AFTER totalInterest exists
  const activeCTA = useCtaPulse(4);
  //const animatedSavings = useSavingsCounter(totalInterest);

  return (
    <div className="wrapper">
      {toast && <div className="toast show">{toast}</div>}

      <div className="header">
        <h1>
          {type === "car"
            ? "Car Loan EMI Calculator"
            : type === "home"
            ? "Home Loan EMI Calculator"
            : type === "personal"
            ? "Personal Loan EMI Calculator"
            : initialLoan
            ? `₹${formatIndianNumber(initialLoan)} Loan EMI Calculator`
            : "Loan EMI Calculator"}
        </h1>
        <p>
          {type === "car"
            ? "Calculate your car loan EMI instantly • Download Amortization Details • Based on reducing balance method"
            : type === "home"
            ? "Calculate your home loan EMI instantly • Download Amortization Details • Based on reducing balance method"
            : type === "personal"
            ? "Calculate your personal loan EMI instantly • Download Amortization Details • Based on reducing balance method"
            : "Calculate your loan EMI instantly • Download Amortization Details • Based on reducing balance method"}
        </p>
      </div>
      <div className="top-section">
        <div className="card">
          <div className="result-box">
            <h2>{formatCurrency(emi)}</h2>
            <span>Your Monthly EMI</span>
          </div>

          {/* 🔥 CTA SECTION  */}
          <div className="cta-main">
            <p>
              You may be overpaying on Interest — Fix this now!
            </p>

            <div className="cta-buttons">
              <a
                href="https://mdeal.in/c_vTUCk022"
                target="_blank"
                className={`cta-btn btn-green ${activeCTA === 0 ? "cta-pulse" : ""}`}
              >
                🔥Reduce Your EMI Today →
              </a>

              <a
                href="https://mdeal.in/c_7ogbCr5N"
                target="_blank"
                className={`cta-btn btn-blue ${activeCTA === 1 ? "cta-pulse" : ""}`}
              >
                ⚡ Check Lowest Rates →
              </a>
            </div>
          </div>

          {/* LOAN */}
          <div className="input-group">
            <label>Loan Amount</label>

            <input
              value={loanText}
              onChange={(e) => {
                const raw = e.target.value.replace(/,/g, "");
                if (!/^\d*$/.test(raw)) return;
                setLoan(Number(raw));
                setLoanText(e.target.value);
              }}
              className={`value-input ${error ? "error" : ""}`}
            />

            <input
              type="range"
              min="100000"
              max="100000000"
              step={type === "personal" ? 1000 : 1000}
              value={loan}
              onChange={(e) => setLoan(Number(e.target.value))}
              style={{
                background: `linear-gradient(
                  to right,
                  rgb(34, 211, 238) ${((loan - 100000) / (100000000 - 100000)) * 100}%,
                  rgb(51, 65, 85) ${((loan - 100000) / (100000000 - 100000)) * 100}%
                )`
              }}
                        />
          </div>

          {/* RATE */}
          <div className="input-group">
            <label>Interest Rate (%)</label>

            <input
              value={rateText}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "") {
                  setRateText("");
                  return;
                }
                const num = parseFloat(val);
                if (isNaN(num)) return;
                if (num < 0.1 || num > 30) return;
                setRate(num);
                setRateText(val);
              }}
              onBlur={() => {
                if (rateText === "" || isNaN(parseFloat(rateText))) {
                  setRateText(String(defaults.rate));
                  setRate(defaults.rate);
                }
              }}
              className="value-input"
              type="number"
              step="0.1"
              min="0.1"
              max="30"
            />

            <input
              type="range"
              min="1"
              max="30"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              style={{
                background: `linear-gradient(
                  to right,
                  rgb(34, 211, 238) ${((rate - 1) / (30 - 1)) * 100}%,
                  rgb(51, 65, 85) ${((rate - 1) / (30 - 1)) * 100}%
                )`
              }}
            />
          </div>

          {/* YEARS */}
          <div className="input-group">
            <label>Loan Tenure (Years)</label>

            <input
              value={yearsText}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "") {
                  setYearsText("");
                  return;
                }
                const num = parseInt(val, 10);
                if (isNaN(num)) return;
                if (num < 1 || num > 30) return;
                setYears(num);
                setYearsText(val);
              }}
              onBlur={() => {
                if (yearsText === "" || isNaN(parseInt(yearsText, 10))) {
                  setYearsText(String(defaults.years));
                  setYears(defaults.years);
                }
              }}
              className="value-input"
              type="number"
              step="1"
              min="1"
              max="30"
            />

            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              style={{
                background: `linear-gradient(
                  to right,
                  rgb(34, 211, 238) ${((years - 1) / (30 - 1)) * 100}%,
                  rgb(51, 65, 85) ${((years - 1) / (30 - 1)) * 100}%
                )`
              }}
            />
          </div>
        </div>

        <div className="breakdown">
          <h2> EMI Breakdown</h2>
          {/* Chart Legend */}
          <div className="chart-legend">
            <div className="legend-item">
              <span className="dot principal"></span>
              Principal
            </div>

            <div className="legend-item">
              <span className="dot interest"></span>
              Interest
            </div>
          </div>
          {/*Chart*/}
          <div className="chart-wrapper">
            <EmiChart principal={loan} interest={totalInterest} emi={emi} />
          </div>

          <div className="summary">
            <div>
              <span>Monthly EMI</span>
              <strong>{formatCurrency(emi)}</strong>
            </div>
            <div>
              <span>Loan amount</span>
              <strong>{formatCurrency(loan)}</strong>
            </div>
            <div>
              <span>Total interest paid</span>
              <strong>{formatCurrency(totalInterest)}</strong>
            </div>
            <div>
              <span>Tenure (Years)</span>
              <strong>{years}</strong>
            </div>
            <div>
              <span>Total amount paid</span>
              <strong>{formatCurrency(totalPayment)}</strong>
            </div>
          </div>
          {/* CTA 3 */}

          <div className="cta-breakdown-premium">
            <p className="cta-text">💰 You can reduce your EMI & save money</p>

            <a
              href="https://mdeal.in/c_vTUCk022"
              target="_blank"
              className={`cta-premium-btn ${activeCTA === 2 ? "cta-pulse" : ""}`}
            >
              ⚡ See Best Deals in 2 Minutes →
            </a>
          </div>
        </div>
        {/* Amortization Table */}
        <AmortizationTable
          loan={loan}
          rate={rate}
          years={years}
          emi={emi}
          totalInterest={totalInterest}
          formatCurrency={formatCurrency}
        />
      </div>
      {/* Sticky CTA */}
      <div>
        <a
          href="https://mdeal.in/c_vTUCk022"
          className={`sticky-cta 
    ${showSticky ? "" : "sticky-hidden"} 
    ${activeCTA === 3 ? "cta-pulse" : ""}
  `}
        >
          🔥 Check Best Loan Offers Now
        </a>
      </div>
      <SeoSection data={seoMap[type] ?? seoMap.loan} />
    </div>
  );
}
