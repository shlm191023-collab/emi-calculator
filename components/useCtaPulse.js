"use client";

import { useEffect, useState } from "react";

export default function useCtaPulse(count = 2, interval = 2000) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, interval);

    return () => clearInterval(timer);
  }, [count, interval]);

  return activeIndex;
}