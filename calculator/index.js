function displayValue(val) {
  document.getElementById("result").value += val;

  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function deleteNum() {
  let currentVal = document.getElementById("result").value;

  let newVal = currentVal.slice(0, -1);

  document.getElementById("result").value = newVal;
}
