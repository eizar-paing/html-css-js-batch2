// function format
// function functionName() {
//   ...
// }

//1. take the value that user entered in the input box 1
//2. take the value that user entered in the input box 2
//3. add the result of addition into one variable named result
//4. show the result to user

function addFunction() {
  // Text
  // '2'+'3' = '23'
  // 2 + 3 = 5
  // let a = 2;
  // '2' => 2
  // Number('2'); // 2
  let num1 = Number(document.getElementById('number1').value);
  let num2 = Number(document.getElementById('number2').value);
  let res = num1 + num2;
  document.getElementById('res').innerHTML = res
  // innerHTML allows modifying the full HTML content inside an element,
}

// let object1 = {
//   name: "JJ",
//   address: "Yangon"
// }

// let str = '3'
// Number(str) => 3

// let str1 = 'test'
// Number(str1) => NaN
      