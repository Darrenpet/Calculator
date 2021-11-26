let sum = "";

function addToSum(operator) {
  sum = sum + operator;
  document.getElementById("output").innerHTML = sum;
}

function evaluateSum() {
  sum = eval(sum);
  document.getElementById("output").innerHTML = sum;
}

function clearSum() {
  sum = "";
  document.getElementById("output").innerHTML = sum;
}
