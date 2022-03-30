// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.
// Обязательно использовать оператор return.

let a = parseInt(prompt('Введите число a'));
let b = parseInt(prompt('Введите число b'));

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// alert('a + b = ' + addition(a, b));
// alert('a - b = ' + subtraction(a, b));
// alert('a * b = ' + multiplication(a, b));
// alert('a / b = ' + division(a,b));
