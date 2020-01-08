let screen = document.getElementById("js-screen");
let one = document.getElementById("js-one");
let two = document.getElementById("js-two");
let three = document.getElementById("js-three");
let four = document.getElementById("js-four");
let five = document.getElementById("js-five");
let six = document.getElementById("js-six");
let seven = document.getElementById("js-seven");
let eight = document.getElementById("js-eight");
let nine = document.getElementById("js-nine");
let zero = document.getElementById("js-zero");
let divide = document.getElementById("js-divide");
let multiply = document.getElementById("js-multiply");
let minus = document.getElementById("js-minus");
let plus = document.getElementById("js-plus");
let equal = document.getElementById("js-equals");
let clear = document.getElementById("js-ce");
let decimal = document.getElementById("js-decimal");
let item = document.getElementsByClassName("item");

let firstOperand = null;
let secondOperand = null;
let mathOperand = null;

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
    debugger;
    secondOperand += number;
  }

  screen.textContent = secondOperand;
}

function displayNumber(number) {
  if (mathOperand === null) {
    setFirstOperand(number);
  } else if (mathOperand !== null) {
    debugger;
    setSecondOperand(number);
  }
  console.log(firstOperand);
console.log(secondOperand);
   console.log(mathOperand);
}

one.addEventListener("click", function(e) {
  displayNumber("1");
});

two.addEventListener("click", function(e) {
  displayNumber("2");
});

three.addEventListener("click", function(e) {
  displayNumber("3");
});

four.addEventListener("click", function(e) {
  displayNumber("4");
});

five.addEventListener("click", function(e) {
  displayNumber("5");
});

six.addEventListener("click", function(e) {
  displayNumber("6");
});

seven.addEventListener("click", function(e) {
  displayNumber("7");
});

eight.addEventListener("click", function(e) {
  displayNumber("8");
});

nine.addEventListener("click", function(e) {
  displayNumber("9");
});

zero.addEventListener("click", function(e) {
  displayNumber("0");
});

decimal.addEventListener("click", function(e) {
  if (decimal.textContent === ".") {
    let zeroNode = document.createTextNode(".");
    screen.appendChild(zeroNode);
  } else {
    screen.textContent = "";
  }
});

minus.addEventListener("click", function(e) {
  let parseFirstOperand = parseFloat(firstOperand);
  let parseSecondOperand = parseFloat(secondOperand);
  screen.textContent = firstOperand;
  if (secondOperand === null) {
    screen.textContent = firstOperand;
  } else if (
    (secondOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
  ) {
    screen.textContent = parseFirstOperand - parseSecondOperand;
    firstOperand = screen.textContent;
  }
});

multiply.addEventListener("click", function(e) {
  mathOperand = "*";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
    screen.textContent = "";
  }
});

divide.addEventListener("click", function(e) {
  mathOperand = "/";
  firstOperand = screen.textContent;
  if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
    screen.textContent = "";
  }
});

plus.addEventListener("click", function(e) {
  mathOperand = "+";
  let parseFirstOperand = parseFloat(firstOperand);
  let parseSecondOperand = parseFloat(secondOperand);
 if (secondOperand === null) {
  screen.textContent = firstOperand;
 } else {
  screen.textContent = parseFirstOperand + parseSecondOperand;
  firstOperand = screen.textContent;
  secondOperand = null;
 }


  //  firstOperand = screen.textContent;
  // if (secondOperand === null) {

  //} else if (secondOperand !== null) {
  // screen.textContent = parseFirstOperand + parseSecondOperand;
  //  firstOperand = parseFirstOperand + parseSecondOperand;
  // }
 console.log(firstOperand);
console.log(secondOperand);
   console.log(mathOperand);

});

equal.addEventListener("click", function(e) {
  secondOperand = screen.innerHTML;
  let parseFirstOperand = parseFloat(firstOperand);
  let parseSecondOperand = parseFloat(secondOperand);
  if (mathOperand === "+") {
    screen.textContent = parseFirstOperand + parseSecondOperand;
  } else if (mathOperand === "-") {
    screen.textContent = parseFirstOperand - parseSecondOperand;
  } else if (mathOperand === "*") {
    screen.textContent = parseFirstOperand * parseSecondOperand;
  } else if (mathOperand === "/") {
    screen.textContent = parseFirstOperand / parseSecondOperand;
  }
});

clear.addEventListener("click", function(e) {
  screen.innerHTML = "";
  firstOperand = null;
  secondOperand = null;
});

// check out firstOperand and what you can do with it once it is saved in a variable
// find a way to capture firstOperand globally?
// make function for multiple functions?

// let multipleItem = item + plus.textContent + item + plus.textContent;
// multipleItem = true;

// if 2 return firstOperand +
// if secondOperand === "1", "2",
// if textContent.length is > 2 screen.textContent = "";

// blank screen
//  if string.length is less than 1
//  if string.length is less than 1
