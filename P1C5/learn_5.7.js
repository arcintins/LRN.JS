// Task 1
// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
// Например:

function unique(arr) {
  return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values)); // Hare, Krishna, :-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
// P.P.S. Используйте Set для хранения уникальных значений.

// End Task 1

// Task 2
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
// Например:
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
// Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
  let map = new Map();

  arr.forEach((el) => {
    map.set(el.toLowerCase().split("").sort().join(""), el)
  });

  return [...map.values()];
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

// End Task 2

// Task 3
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
// Но это не выходит:

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
// *= map.keys() - возвращает итерируемый объект [Map Iterator], а не массив, 
// нам нужно любым способом преобразовать его в массив, например [...map.keys()]


// End Task 3