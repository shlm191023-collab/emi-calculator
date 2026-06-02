import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function downloadPDF({
  loan,
  rate,
  years,
  emi,
  totalInterest,
  schedule,
}) {
  const doc = new jsPDF();

  const formatCurrency = (num) =>
    "Rs. " + Math.round(num).toLocaleString("en-IN");

  const formatNumber = (num) =>
    Math.round(num).toLocaleString("en-IN");

  // ======================
  // HEADER
  // ======================
  doc.setFillColor(15, 30, 60);
  doc.roundedRect(14, 10, 180, 16, 4, 4, "F");

  doc.setTextColor(255);
  doc.setFontSize(13);
  doc.text("EMI Analysis Report", 105, 18, { align: "center" });

  doc.setFontSize(8);
  doc.setTextColor(200);
  doc.text("Powered by emicalculatorindia.com", 105, 22, { align: "center" });

  // ======================
  // EMI BOX (compact)
  // ======================
  doc.setFillColor(240, 248, 255);
  doc.roundedRect(14, 30, 180, 16, 3, 3, "F");

  doc.setFontSize(9);
  doc.setTextColor(80);
  doc.text("Your Monthly EMI", 105, 36, { align: "center" });

  doc.setFontSize(16);
  doc.setTextColor(0, 102, 204);
  doc.text(formatCurrency(emi), 105, 43, { align: "center" });

  // ======================
  // LOAN DETAILS (clean grid)
  // ======================
  doc.setFontSize(9);
  doc.setTextColor(80);

  doc.text("Loan Amount", 18, 55);
  doc.text("Interest Rate", 18, 61);
  doc.text("Tenure", 18, 67);

  doc.setTextColor(0);

  doc.text(formatCurrency(loan), 70, 55);
  doc.text(`${rate}%`, 70, 61);
  doc.text(`${years} years`, 70, 67);

  // ======================
  // WARNING BOX (conversion)
  // ======================
  //doc.setFillColor(255, 235, 235);
  //doc.roundedRect(14, 72, 180, 12, 3, 3, "F");

  doc.setTextColor(200, 0, 0);
  doc.setFontSize(15);

  doc.text(
    `You are overpaying Rs.${formatNumber(totalInterest)} as Interest!!`,
    105,
    78,
    { align: "center" }
  );

  // ======================
  // CTA BUTTON (REAL BUTTON LOOK)
  // ======================
  //doc.setFillColor(0, 102, 204);
  doc.setFillColor(240, 248, 255);
  doc.roundedRect(50, 88, 110, 10, 3, 3, "F");
  //doc.roundedRect(14, 30, 100, 16, 3, 3, "F");

  //doc.setTextColor(255);
  doc.setTextColor(0, 102, 204);
  doc.setFontSize(13);

  doc.textWithLink("Click to Check Lowest EMI Offers", 105, 95, {
    url: "https://mdeal.in/c_vTUCk022",
    align: "center",
  });

  // ======================
  // WHATSAPP
  // ======================
  const whatsappMsg = encodeURIComponent(
    `Check your EMI here:\nhttps://emicalculatorindia.com/`
  );

  doc.setTextColor(0, 150, 0);
  doc.setFontSize(9);

  doc.textWithLink("Click to Share on WhatsApp", 105, 105, {
    url: `https://wa.me/?text=${whatsappMsg}`,
    align: "center",
  });

  // ======================
  // TABLE DATA
  // ======================
  const tableData = schedule.map((row) => [
    row.date.toLocaleString("default", {
      month: "short",
      year: "numeric",
    }),
    "Rs. " + formatNumber(row.emi),
    "Rs. " + formatNumber(row.principal),
    "Rs. " + formatNumber(row.interest),
    "Rs. " + formatNumber(row.balance),
  ]);

  // ======================
  // TABLE
  // ======================
 autoTable(doc, {
  startY: 115,

  head: [["Month", "EMI", "Principal", "Interest", "Balance"]],

  body: tableData,

  styles: {
    fontSize: 8,
    cellPadding: 2.5,
    valign: "middle",
  },

  // ✅ ALIGN HEADER SAME AS DATA
  headStyles: {
    fillColor: [20, 30, 60],
    textColor: 255,
    fontStyle: "bold",
  },

  columnStyles: {
    0: { halign: "left", cellWidth: 35 },   // Month
    1: { halign: "right", cellWidth: 30 },  // EMI
    2: { halign: "right", cellWidth: 35 },  // Principal
    3: { halign: "right", cellWidth: 30 },  // Interest
    4: { halign: "right", cellWidth: 40 },  // Balance
  },

  // 🔥 KEY FIX: force header alignment per column
  didParseCell: function (data) {
    if (data.section === "head") {
      data.cell.styles.halign = data.column.index === 0 ? "left" : "right";
    }
  },

  alternateRowStyles: {
    fillColor: [245, 247, 250],
  },
});

  // ======================
  // FOOTER (conversion loop)
  // ======================
  const pageCount = doc.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);

    doc.setFontSize(8);
    doc.setTextColor(120);

    doc.text(`Page ${i} of ${pageCount}`, 180, 290, {
      align: "right",
    });

    doc.text("Powered by emicalculatorindia.com", 14, 290);
   
  }

  doc.save("EMI-Report.pdf");
}