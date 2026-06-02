"use client";

import { useState, useMemo } from "react";
import { generateSchedule } from "./useAmortization";
import downloadPDF from "./downloadPDF";

export default function AmortizationTable({
  loan,
  rate,
  years,
  emi,
  totalInterest,
  formatCurrency,
}) {
  const [showAll, setShowAll] = useState(false);
  const [openYear, setOpenYear] = useState(null);

  const toggleYear = (year) => {
    setOpenYear(openYear === String(year) ? null : String(year));
  };

  const schedule = useMemo(() => {
    return generateSchedule(loan, rate, years);
  }, [loan, rate, years]);

  // Group by year
  const grouped = useMemo(() => {
    const map = {};

    schedule.forEach((row) => {
      const year = row.date.getFullYear();

      if (!map[year]) map[year] = [];
      map[year].push(row);
    });

    return map;
  }, [schedule]);

  const yearsList = Object.keys(grouped);

  return (
    <div className="table-section">
      <div className="table-header">
        <h2> Amortization Details (Year-wise/Month-wise)</h2>
        <button
          className="download-btn"
          onClick={() =>
            downloadPDF({
              loan,
              rate,
              years,
              emi,
              totalInterest,
              schedule,
            })
          }
        >
          📥 Download
        </button>
      </div>

      {yearsList.map((year, index) => {
        if (!showAll && index >= 3) return null;

        return (
          <div
            key={year}
            className={`year-block ${openYear === String(year) ? "active" : ""}`}
          >
            <div className="year-header" onClick={() => toggleYear(year)}>
              <span>📅 {year}</span>

              <span
                className={`arrow ${openYear === String(year) ? "open" : ""}`}
              >
                ▼
              </span>
            </div>

            <div
              className="year-content"
              style={{
                maxHeight: openYear === String(year) ? "1000px" : "0px",
              }}
            >
              <div className="year-inner">
                <div className="table-scroll">
                  <table>
                    <thead>
                      <tr>
                        <th>Month</th>
                        <th>EMI</th>
                        <th>Principal</th>
                        <th>Interest</th>
                        <th>Balance</th>
                      </tr>
                    </thead>

                    <tbody>
                      {openYear === String(year) &&
                        grouped[year].map((row, i) => (
                          <tr key={i}>
                            <td>
                              {row.date.toLocaleString("default", {
                                month: "short",
                              })}
                            </td>
                            <td>{formatCurrency(row.emi)}</td>
                            <td>{formatCurrency(row.principal)}</td>
                            <td>{formatCurrency(row.interest)}</td>
                            <td>{formatCurrency(row.balance)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {yearsList.length > 3 && (
        <button className="download-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}
