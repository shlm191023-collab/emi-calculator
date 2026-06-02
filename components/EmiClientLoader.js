"use client";

import dynamic from "next/dynamic";

const EmiCalculator = dynamic(() => import("./EmiCalculator"), {
  ssr: false,
});

export default function EmiClientLoader(props) {
  return <EmiCalculator {...props} />;
}
