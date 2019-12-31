
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
    firstOperand = "1";
    let oneNode = document.createTextNode("1");
    if (screen.textContent === "") {
      screen.appendChild(oneNode);
    } else if (screen.textContent === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      screen.textContent = one.textContent;
    } else if (secondOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      screen.appendChild(oneNode);
    }
  });

  two.addEventListener("click", function(e) {
    let twoNode = document.createTextNode("2");
    if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0") {
      screen.textContent = "" + "2";
      secondOperand = "2";
    }
  });

  three.addEventListener("click", function(e) {
    if (three.textContent === "3") {
      let threeNode = document.createTextNode("3");
      screen.appendChild(threeNode);
    } else {
      screen.textContent = "";
    }
  });

  four.addEventListener("click", function(e) {
    if (four.textContent === "4") {
      let fourNode = document.createTextNode("4");
      screen.appendChild(fourNode);
    } else {
      screen.textContent = "";
    }
  });

  five.addEventListener("click", function(e) {
    if (five.textContent === "5") {
      let fiveNode = document.createTextNode("5");
      screen.appendChild(fiveNode);
    } else {
      screen.textContent = "";
    }
  });

  six.addEventListener("click", function(e) {
    if (six.textContent === "6") {
      let sixNode = document.createTextNode("6");
      screen.appendChild(sixNode);
    } else {
      screen.textContent = "";
    }
  });

  seven.addEventListener("click", function(e) {
    if (seven.textContent === "7") {
      let sevenNode = document.createTextNode("7");
      screen.appendChild(sevenNode);
    } else {
      screen.textContent = "";
    }
  });

  eight.addEventListener("click", function(e) {
    if (eight.textContent === "8") {
      let eightNode = document.createTextNode("8");
      screen.appendChild(eightNode);
    } else {
      screen.textContent = "";
    }
  });

  nine.addEventListener("click", function(e) {
    if (nine.textContent === "9") {
      let nineNode = document.createTextNode("9");
      screen.appendChild(nineNode);
    } else {
      screen.textContent = "";
    }
  });

  zero.addEventListener("click", function(e) {
    if (zero.textContent === "0") {
      let zeroNode = document.createTextNode("0");
      screen.appendChild(zeroNode);
    } else {
      screen.textContent = "";
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
    mathOperand = "-";
    firstOperand = screen.textContent;
    if ((firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0")) {
      screen.textContent = "";
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
    if (secondOperand === null) {
      screen.textContent = firstOperand;
    } else if (firstOperand && secondOperand === !null) {
      screen.textContent = firstOperand + secondOperand;
    }
    
    
   
    
    //let parseFirstOperand = parseFloat(firstOperand);
      //let parseSecondOperand = parseFloat(secondOperand);
   //  if (firstOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" && secondOperand === "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" ) {
    // screen.textContent = firstOperand;
   // } else {
      // screen.textContent = firstOperand;
  //  }
  
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



