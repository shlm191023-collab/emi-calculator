function formatCurrency(num) {
  return "₹" + Number(num).toLocaleString("en-IN");
}

function calculateEMI() {
  let P = document.getElementById("loan").value;
  let annualRate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;

  let r = annualRate / 12 / 100;
  let n = years * 12;

  let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  document.getElementById("emi").innerText = formatCurrency(Math.round(emi));
  document.getElementById("loanValue").innerText = formatCurrency(P);
  document.getElementById("rateValue").innerText = annualRate + "%";
  document.getElementById("yearsValue").innerText = years;
}

document.querySelectorAll("input").forEach(input => {
  input.addEventListener("input", calculateEMI);
});

calculateEMI();
