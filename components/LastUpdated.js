"use client";
import { useState, useEffect } from 'react';

export default function LastUpdated() {
  const [mounted, setMounted] = useState(false);

  // This ensures the component only renders the date on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a skeleton like: <p>Loading...</p>
  }

  const lastUpdated = new Intl.DateTimeFormat('en-IN', {
    month: 'long',
    year: 'numeric',
  }).format(new Date());

  return (
    <p>
      <strong>Last updated:</strong> {lastUpdated}
    </p>
  );
}
