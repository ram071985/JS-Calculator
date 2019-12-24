// Button location
let screen = document.getElementById("js-screen");
let one = document.getElementById("js-one");
let two = document.getElementById("js-two");
let plus = document.getElementById("js-plus");
let equal = document.getElementById("js-equals");

let firstOperand = null;
let secondOperand = null;

let text = screen.innerHTML;

function convertString() {
  const stringOne = "1";
  const stringTwo = "2";
  const stringThree = "3";
  const stringFour = "4";
  const stringFive = "5";
  const stringSix = "6";
  const stringSeven = "7";
  const stringEight = "8";
  const stringNine = "9";
  const stringZero = "0";

  parseInt(
    stringOne,
    stringTwo,
    stringThree,
    stringFour,
    stringFive,
    stringSix,
    stringSeven,
    stringEight,
    stringNine,
    stringZero
  );
}

// One Key Functionality
one.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let oneNode = document.createTextNode("1");
  screen.appendChild(oneNode);
});

// One Key Functionality
two.addEventListener("click", function(e) {
  screen.innerHTML = "";
  let twoNode = document.createTextNode("2");
  screen.appendChild(twoNode);
});

// Plus key functionality
plus.addEventListener("click", function(e) {
  firstOperand = screen.innerHTML;
});

// Equals sign Functionality
equal.addEventListener("click", function() {
  secondOperand = screen.innerHTML;
  let result = firstOperand + secondOperand;
  screen.innerHTML = result;
  console.log(result);
});
