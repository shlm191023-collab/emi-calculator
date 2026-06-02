"use client";

import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

/* Center Text Plugin */
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width, height, ctx } = chart;

    const data = chart.options.plugins.centerTextData || {};
    const emi = data.emi;

    if (!emi) return; // ✅ avoid ₹0 flicker

    const formatted = "₹" + Math.round(emi).toLocaleString("en-IN");

    ctx.save();

    // MAIN VALUE
    ctx.font = "bold 18px Inter";
    ctx.fillStyle = "#e2e8f0";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(formatted, width / 2, height / 2 - 6);

    // SUBTEXT
    ctx.font = "11px Inter";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Monthly EMI", width / 2, height / 2 + 14);

    ctx.restore();
  },
};

export default function EmiChart({ principal, interest, emi }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  // ✅ CREATE ONCE
  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: ["Principal", "Interest"],
        datasets: [
          {
            data: [principal, interest],
            backgroundColor: ["#22d3ee", "#3b82f6"],
            borderWidth: 0,
            hoverOffset: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "72%",
        animation: {
          duration: 800,
          easing: "easeOutQuart",
        },
        plugins: {
          legend: {
            display: false,
          },
          centerTextData: { emi },
        },
      },
      plugins: [centerTextPlugin],
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, []);

  // ✅ UPDATE ONLY (NO RE-CREATE)
  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.data.datasets[0].data = [principal, interest];
    chartRef.current.options.plugins.centerTextData = { emi };

    chartRef.current.update("none"); // ⚡ smooth
  }, [principal, interest, emi]);

  return (
    <div style={{ height: "280px" }}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}