// Task 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

let user = {};
user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

// End Task 1

// Task 2
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
let schedule = {};
console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (key in obj) return false
    return true
}

// End Task 2

// Task 3
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?

const user = {
  name: "John"
};

// это будет работать?
user.name = "Pete";
// Да будет, мы не изменяем значение переменной user (адрес в область в памяти)
// user = 0 - Уже не будет работать

// End Task 3

// Task 4
// У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let sum = getSumProps(salaries)

function getSumProps(obj){
    let total = 0
    for (key in obj) total += salaries[key]
    return total
}

// End Task 4

// Task 5
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj){
    for (key in obj){
        if (typeof obj[key] === "number") obj[key] *= 2
    }
}

// Например:
// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu)
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// End Task 5