let screen = document.getElementById("js-screen");
let firstOperand = null;
let secondOperand = null;
let mathOperand = null;

screen.textContent = "0";


const numberButtons = document.querySelectorAll(".number-btn");
for (let i = 0; i < numberButtons.length; i++) {
  const numberBtn = numberButtons[i];
  numberBtn.addEventListener("click", function(e) {
    displayNumber(e.target.textContent);
  });
}

const operatorButtons = document.querySelectorAll(".operator-btn");
for (let i = 0; i < operatorButtons.length; i++) {
  const operatorBtn = operatorButtons[i];
  operatorBtn.addEventListener("click", function(e) {
    if (secondOperand !== null) {
      firstOperand = equals();
      secondOperand = null;
      screen.textContent = firstOperand;
    }
    mathOperand = e.target.textContent;
});
}

let decimal = document.getElementById("js-decimal");
decimal.addEventListener("click", function(e) {
  displayNumber(".");
});


let equal = document.getElementById("js-equals");
equal.addEventListener("click", function(e) {
  secondOperand = screen.innerHTML;
 
  firstOperand = equals();
  secondOperand = null;
  mathOperand = null;

  screen.textContent = firstOperand;
});

let clear = document.getElementById("js-ce");
clear.addEventListener("click", function(e) {
  firstOperand = null;
  secondOperand = null;
  mathOperand = null;
  screen.textContent = "0";
});

function setFirstOperand(number) {
  if (firstOperand === null) {
    firstOperand = number;
  } else {
    firstOperand += number;
  }
  screen.textContent = firstOperand;
}

function setSecondOperand(number) {
  if (secondOperand === null) {
    secondOperand = number;
  } else {
    secondOperand += number;
  }
  screen.textContent = secondOperand;
}

function displayNumber(number) {
  if (mathOperand === null) {
    setFirstOperand(number);
  } else if (mathOperand !== null) {
    setSecondOperand(number);
  }
}

function equals() {
  let parseFirstOperand = parseFloat(firstOperand);
  let parseSecondOperand = parseFloat(secondOperand);

  if (mathOperand === "+") {
    return parseFirstOperand + parseSecondOperand;
  }
  if (mathOperand === "-") {
    return parseFirstOperand - parseSecondOperand;
  }
  if (mathOperand === "*") {
    return parseFirstOperand * parseSecondOperand;
  }
  if (mathOperand === "/") {
    return parseFirstOperand / parseSecondOperand;
  }
}
