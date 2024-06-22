function subFunction() {
  let num1 = Number(document.getElementById('number1').value);
  let num2 = Number(document.getElementById('number2').value);
  let res = num1 - num2;
  document.getElementById('res').innerHTML = res
}