

// Button location
let screen = document.getElementById('js-screen');
let one = document.getElementById('js-one');
let two = document.getElementById('js-two');
let plus = document.getElementById('js-plus');
let screenText = screen.innerHTML = '1';

// let keys = ['one',
 //           'two',
//           'plus',
//            'equals',];
// keys[0] = document.getElementsByClassName('one')
// keys[1] = document.getElementsByClassName('two')
// keys[2] = document.getElementsByClassName('plus') 
// keys[3] = document.getElementsByClassName('equals')                 


// One Key Functionality
one.addEventListener('click', function(e) {
  let newText = document.createTextNode('1');
  screen.appendChild(newText);
  

});

plus.addEventListener('click', function(e) {
  let elContent = screen;
  console.log(elContent);
});



