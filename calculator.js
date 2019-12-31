
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

  

  let plusEquals = "+";
  let minusEquals = "-";
  let firstOperand = null;
  let secondOperand = null;
  let mathOperand = null;
  let multipleFunction = null;
  let newNumber = "";

  one.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "1";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "1";
      screen.textContent = secondOperand;
    } 
  });

  two.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "2";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "2";
      screen.textContent = secondOperand;
    } 
  });

  three.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "3";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "3";
      screen.textContent = secondOperand;
    } 
  });

  four.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "4";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "4";
      screen.textContent = secondOperand;
    }
  });

  five.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "5";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "5";
      screen.textContent = secondOperand;
    }
  });

  six.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "6";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "6";
      screen.textContent = secondOperand;
    }
  });

  seven.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "7";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "7";
      screen.textContent = secondOperand;
    }
  });

  eight.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "8";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "8";
      screen.textContent = secondOperand;
    }
  });

  nine.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "9";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "9";
      screen.textContent = secondOperand;
    }
  });

  zero.addEventListener("click", function(e) {
    if (screen.textContent === "") {
      screen.textContent = "0";
    } else if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      secondOperand = "0";
      screen.textContent = secondOperand;
    }
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
    firstOperand = screen.textContent;
    screen.textContent = firstOperand;
    if (secondOperand === null) {
      screen.textContent = firstOperand;
    } else if (secondOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ) {
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

  plus.addEventListener('click', function(e) {
    let parseFirstOperand = parseFloat(firstOperand);
    let parseSecondOperand = parseFloat(secondOperand);
    firstOperand = screen.textContent;
    screen.textContent = firstOperand;
    if (secondOperand === null) {
      screen.textContent = firstOperand;
    } else if (secondOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ) {
      screen.textContent = parseFirstOperand + parseSecondOperand;
      firstOperand = screen.textContent; 
    }
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



