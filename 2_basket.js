

// basketContent - массив с массивами, в которых хранятся
// данные о товарах в корзине в следующем порядке: название, цена, количество.
// Функция countBasketPrice перебирает элементы (массивы) в basketContent,
// умножает цену каждого товара на количество
// затем прибавляет это значение к totalPrice и возвращает его
// если totalPrice = 0 или в массиве нет товаров - возвращает "Корзина пуста"
function countBasketPrice(basketContent) {
  let totalPrice = 0;

  basketContent.forEach((value, index, array) => {
    // console.log('index: ' + index + ', value: ' + value);
    totalPrice += value[1] * value[2];
  });

  if ((totalPrice === 0) || (totalPrice == NaN)) return 'Корзина пуста';

  return totalPrice;
}


// тестовые корзины для проверки
let testBasket = [
  ['Бананы', 105, 3],
  ['Ананасы', 250, 1],
  ['Груши', 170, 4],
  ['Молоко', 65, 2]
];

let zeroBasket = [
  ['Груши',100,0],
  ['Абрикосы', 200, 0]
];

let emptyBasket = [];

console.log(countBasketPrice(testBasket));
console.log(countBasketPrice(zeroBasket));
console.log(countBasketPrice(emptyBasket));
