

// Button location
let screen = document.getElementById('js-screen');
let one = document.getElementById('js-one');
let two = document.getElementById('js-two');
let plus = document.getElementById('js-plus');
let equal = document.getElementById('js-equals')

let firstOperand = null;
let secondOperand = null;


// One Key Functionality
one.addEventListener('click', function(e) {
  screen.innerHTML = '';
  let oneNode = document.createTextNode('1');
  screen.appendChild(oneNode);
  

});

// One Key Functionality
two.addEventListener('click', function(e) {
  screen.innerHTML = '';
  let twoNode = document.createTextNode('2');
  screen.appendChild(twoNode);
  

});

// Plus key functionality
plus.addEventListener('click', function(e) {
  firstOperand = screen.innerHTML;
});

// Equals sign Functionality
equal.addEventListener('click', function() {
  secondOperand = screen.innerHTML;
  let result = firstOperand + secondOperand;
  screen.innerHTML = result;
  
 
  

});


// let keys = ['one',
 //           'two',
//           'plus',
//            'equals',];
// keys[0] = document.getElementsByClassName('one')
// keys[1] = document.getElementsByClassName('two')
// keys[2] = document.getElementsByClassName('plus') 
// keys[3] = document.getElementsByClassName('equals')               



