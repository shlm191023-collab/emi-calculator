let chart;
let showAll = false;

function formatCurrency(num) {
  return "₹" + Number(num).toLocaleString("en-IN");
}
const emiEl = document.getElementById("emi");

function animateEMI(value) {
  emiEl.style.transform = "scale(1.05)";
  setTimeout(() => {
    emiEl.style.transform = "scale(1)";
  }, 150);
}
function downloadPDF() {
  const element = document.querySelector(".wrapper");

  const opt = {
    margin: 0.5,
    filename: 'emi-report.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}

function generateYearlyTable(P, r, n, emi) {
  let balance = P;
  const container = document.getElementById("yearContainer");
  container.innerHTML = "";

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth(); // 0 = Jan

  let monthCounter = 0;

  for (let y = 0; y < 10; y++) {

    let year = currentYear + y;

    let yearBlock = document.createElement("div");
    yearBlock.className = "year-block";

    let header = document.createElement("div");
    header.className = "year-header";
    header.innerHTML = `<span>📅 ${year}</span><span>▼</span>`;

    let content = document.createElement("div");
    content.className = "year-content";

    let table = `<table>
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
    `;

    for (let m = 0; m < 12; m++) {

      if (y === 0 && m < currentMonth) continue;
      if (monthCounter >= n) break;

      let interest = balance * r;
      let principal = emi - interest;
      balance -= principal;

      table += `
        <tr>
          <td>${new Date(year, m).toLocaleString('default', { month: 'short' })}</td>
          <td>${formatCurrency(emi)}</td>
          <td>${formatCurrency(principal)}</td>
          <td>${formatCurrency(interest)}</td>
          <td>${formatCurrency(Math.abs(balance))}</td>
        </tr>
      `;

      monthCounter++;
    }

    table += "</tbody></table>";
    content.innerHTML = table;

    // Toggle expand
    header.onclick = () => {
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    };

    // First year open
    if (y === 0) content.style.display = "block";

    // Hide after 5 years initially
    if (y >= 5) yearBlock.style.display = "none";

    yearBlock.appendChild(header);
    yearBlock.appendChild(content);
    container.appendChild(yearBlock);
  }

  // Toggle button
  const btn = document.getElementById("toggleYearsBtn");

  btn.onclick = () => {
    const blocks = document.querySelectorAll(".year-block");

    showAll = !showAll;

    blocks.forEach((block, index) => {
      if (index >= 5) {
        block.style.display = showAll ? "block" : "none";
      }
    });

    btn.innerText = showAll ? "Show Less Years" : "Show More Years";
  };
}
function calculateEMI() {
  let P = Number(document.getElementById("loan").value);
  let annualRate = Number(document.getElementById("rate").value);
  let years = Number(document.getElementById("years").value);

  let r = annualRate / 12 / 100;
  let n = years * 12;

  let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  let totalPayment = emi * n;
  let totalInterest = totalPayment - P;

  document.getElementById("emi").innerText = formatCurrency(Math.round(emi));
  document.getElementById("loanValue").innerText = formatCurrency(P);
  document.getElementById("rateValue").innerText = annualRate + "%";
  document.getElementById("yearsValue").innerText = years;

  document.getElementById("principalValue").innerText = formatCurrency(P);
  document.getElementById("interestValue").innerText = formatCurrency(Math.round(totalInterest));

  updateChart(P, totalInterest);

  animateEMI(emi);
  generateYearlyTable(P, r, n, emi);
}
function updateChart(principal, interest) {
  const ctx = document.getElementById('emiChart').getContext('2d');

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Principal', 'Interest'],
      datasets: [{
        data: [principal, interest],
        backgroundColor: ['#22d3ee', '#3b82f6']
      }]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }
  });
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", calculateEMI);
});

window.onload = function () {
  calculateEMI();
};