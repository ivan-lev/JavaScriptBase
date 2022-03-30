// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

let a = parseInt(prompt('Введите число a'));
let b = parseInt(prompt('Введите число b'));
let operation = prompt('Введите операцию');

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

function mathOperation(arg1, arg2, operation) {
  let answer;
  operation = operation.toLowerCase(); //приведём операцию к нижнему регистру

  if (isNaN(arg1) || isNaN(arg2)) { //проверка, что введены числа
    return 'Одно из введённых значений не является числом';
  }

  switch (operation) {
    case 'сложение':
      return addition(arg1, arg2);
    case 'вычитание':
      return subtraction(arg1, arg2);
    case 'умножение':
      return multiplication(arg1, arg2);
    case 'деление':
      return division(arg1, arg2);
    default: // если слово не совпало с операциями из списка
      answer = 'Вы ввели неправильную операцию';
  }

  return answer;

}

alert(mathOperation(a, b, operation));
