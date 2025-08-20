let screen = document.getElementById("screen");
let currentInput = "0";
function putNum(num) {
  if (currentInput === "0") {
    currentInput = num; 
  } else {
    currentInput += num;
  }
  screen.innerText = currentInput;
}

function putSign(sign) {
  currentInput += sign;
  screen.innerText = currentInput;
}
function clearAll() {
  currentInput = "0";
  screen.innerText = currentInput;
}
function backOne() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === "" || currentInput === "-") {
    currentInput = "0";
  }
  screen.innerText = currentInput;
}
function showResult() {
  try {
    let result = eval(currentInput); 
    screen.innerText = result;
    currentInput = result.toString();
  } catch (error) {
    screen.innerText = "Error";
    currentInput = "0";
  }
}
