"use client";

import { useEffect, useState } from "react";

export default function useSavingsCounter(totalInterest) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 800; // animation time
    const steps = 30;
    const increment = totalInterest / steps;

    const interval = setInterval(() => {
      start += increment;

      if (start >= totalInterest) {
        start = totalInterest;
        clearInterval(interval);
      }

      setDisplayValue(Math.round(start));
    }, duration / steps);

    return () => clearInterval(interval);
  }, [totalInterest]);

  return displayValue;
}