// Task 1
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:

console.log(camelize("background-color")) // 'backgroundColor';
console.log(camelize("list-style-image")) // 'listStyleImage';
console.log(camelize("-webkit-transition")) // 'WebkitTransition';

function camelize(str){
    return str.split("-").map((el, i) => 
        i !== 0 ? el.slice(0, 1).toUpperCase() + el.slice(1) : el.toLowerCase()).join("")
}

// End Task 1

// Task 2
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

let arr0 = [5, 3, 8, 1];
let filtered = filterRange(arr0, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)
console.log(arr0); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b){
    return arr.filter(el => el >= a && el <= b)
}

// End Task 2

// Task 3
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4
console.log(arr1); // [3, 1]

function filterRangeInPlace(arr, a, b){
    for (let i = arr.length - 1; i >= 0; i--){
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1)
        }
    }
}

// End Task 3

// Task 4
// Сортировать в порядке по убыванию
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a) // *=
console.log(arr2); // 8, 5, 2, 1, -10

// End Task 4

// Task 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr3); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr){
    return structuredClone(arr).sort()
}

// End Task 5

// Task 6
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) 
// и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("2 ** 3")); // 8
console.log(powerCalc.calculate("2 - 3")); // -1
console.log(powerCalc.calculate("100 / 25")); // 4
console.log(powerCalc.calculate("2 * 3")); // 6

function Calculator(){
    this.operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    this.calculate = function(str) {
        let strSplited = str.split(" ");
        if (!(Number.isFinite(Number(strSplited[0])) || 
            Number.isFinite(Number(strSplited[2]))) ||
            !Object.hasOwn(this.operations, strSplited[1])) return "Egor" // Вместо тысячи слов
        return this.operations?.[strSplited[1]]?.(Number(strSplited[0]), Number(strSplited[2]))
    };

    this.addMethod = function(name, func) {
        this.operations[name] = func;
    };
}

// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.
// End Task 6

// Task 7
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:

let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 28};
let users = [vasya, petya, masha];

let names = users.map((user) => user.name);

console.log(names); // Вася, Петя, Маша

// End Task 7

// Task 8
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
// Например:

let vasya2 = {name: "Вася", surname: "Пупкин", id: 1};
let petya2 = {name: "Петя", surname: "Иванов", id: 2};
let masha2 = {name: "Маша", surname: "Петрова", id: 3};
let users2 = [vasya2, petya2, masha2];

let usersMapped = users2.map((user) => {
    return {
        fullName: user.name + " " + user.surname,
        id: user.id
    }
});

console.log(usersMapped);
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log( usersMapped[0].id ); // 1
console.log( usersMapped[0].fullName ); // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.

// End Task 8

// Task 9

// End Task 9

// Task 10

// End Task 10

// Task 11

// End Task 11

// Task 12

// End Task 12

// Task 13

// End Task 13