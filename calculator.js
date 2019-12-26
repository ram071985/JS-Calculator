// Button location
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

let firstOperand = null;
let secondOperand = null;

let text = screen.innerHTML;

// One Key Functionality
one.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let oneNode = document.createTextNode("1");
  screen.appendChild(oneNode);
});

// Two Key Functionality
two.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let twoNode = document.createTextNode("2");
  screen.appendChild(twoNode);
});

// Three Key Functionality
three.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let threeNode = document.createTextNode("3");
  screen.appendChild(threeNode);
});

// Four Key Functionality
four.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let fourNode = document.createTextNode("4");
  screen.appendChild(fourNode);
});

// Five Key Functionality
five.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let fiveNode = document.createTextNode("5");
  screen.appendChild(fiveNode);
});

// Six Key Functionality
six.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let sixNode = document.createTextNode("6");
  screen.appendChild(sixNode);
});

// Seven Key Functionality
seven.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let sevenNode = document.createTextNode("7");
  screen.appendChild(sevenNode);
});

// Eight Key Functionality
eight.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let eightNode = document.createTextNode("8");
  screen.appendChild(eightNode);
});

// Nine Key Functionality
nine.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let nineNode = document.createTextNode("9");
  screen.appendChild(nineNode);
});

// Zero Key Functionality
zero.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let zeroNode = document.createTextNode("0");
  screen.appendChild(zeroNode);
});

// Plus key functionality
plus.addEventListener("click", function(e) {
  firstOperand = screen.innerHTML;
});

// Multiply key functionality
multiply.addEventListener("click", function(e) {
  firstOperand = screen.innerHTML;
});

// Divide key functionality
divide.addEventListener("click", function(e) {
  firstOperand = screen.innerHTML;
});

// Decimal key functionality
decimal.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let decimalNode = document.createTextNode(".");
  screen.appendChild(decimalNode);
});

// Plus Equal sign Functionality
equal.addEventListener("click", function(e) {
  secondOperand = screen.innerHTML;
  let plusResult = +firstOperand + +secondOperand;
     screen.innerHTML = plusResult;
  


  

});

// Plus Equal sign Functionality
equal.addEventListener("click", function(e) {
  secondOperand = screen.innerHTML;
  let minusResult = +firstOperand - +secondOperand;
     screen.innerHTML = minusResult;
  


  

});

// Clear button Functionality
clear.addEventListener("click", function(e) {
  screen.innerHTML = "";
  
});