// Task 1
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех 
// зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

function sumSalaries(salaries){
  return Object.values(salaries).reduce((sum, el) => {
    sum += el
    return sum;
  }, 0);
}

// Например:
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

console.log(sumSalaries(salaries)); // 650
// End Task 1

// Task 2
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

const count = (obj) => Object.keys(obj).length;

let user = {
  name: 'John',
  age: 30
};

console.log(count(user)); // 2
// Постарайтесь сделать код как можно короче.
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
// End Task 2