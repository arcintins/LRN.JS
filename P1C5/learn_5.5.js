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
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.
// Например:

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr4 = [ vasya3, petya3, masha3 ];
sortByAge(arr4);

// теперь: [vasya, masha, petya]
console.log(arr4[0].name); // Вася
console.log(arr4[1].name); // Маша
console.log(arr4[2].name); // Петя

function sortByAge(users) {
    users.sort((userA, userB) => userA.age - userB.age);
}

// End Task 9

// Task 10
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
let arr5 = [1, 2, 3];
shuffle(arr5);
shuffle(arr5);
shuffle(arr5);

function shuffle(array) {
    let indexes = [...Array(array.length).keys()];
    let indexesLength = indexes.length;

    let getRandomIndex = () => Math.floor(Math.random() * (indexes.length) + 1);

    for (let i = 0; i < indexesLength; i++) {
        let [randomIndex1, randomIndex2] = [getRandomIndex(), getRandomIndex()];
        [array[randomIndex1], array[randomIndex2]] = [array[randomIndex2], array[randomIndex1]];
        indexesLength--;
    }
    // console.log(array);
}


function testChances(){
    let counter = {};
    for (let i = 0; i < 1000000; i++){
        shuffle(arr5)
        if (!(arr5 in counter)) {counter[arr5] = 1; continue;};
        counter[arr5] += 1;
    }
    console.log(counter);
}

testChances()

// Примерно равные шансы выходят
// {
//   '1,2,3': 165849,
//   '3,1,2': 166248,
//   '2,1,3': 166978,
//   '3,2,1': 166684,
//   '2,3,1': 166587,
//   '1,3,2': 167654
// }

// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] 
// может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.
// End Task 10

// Task 11

// End Task 11
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:

let vasya4 = {name: "Вася", age: 25};
let petya4 = {name: "Петя", age: 30};
let masha4 = {name: "Маша", age: 29};

let arr6 = [vasya4, petya4, masha4];
console.log(getAverageAge(arr6)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(users){
    return users.reduce((sum, user) => {
        return sum + user.age;
    }, sum = 0) / users.length;
}

// Task 12
// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// Например:

function unique(arr) {
    return Array.from(new Set(arr))
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(unique(strings)); // кришна, харе, :-O

// End Task 12

// Task 13
// Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
// Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
// Например:

let users13 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users13);

function groupById(arr){
    return arr.reduce((users, user) => {
        users[user.id] = user;
        return users;
    }, users = {});
}

console.log(usersById)
/*
после вызова у нас должно получиться:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
// Такая функция очень удобна при работе с данными, которые приходят с сервера.
// В этой задаче мы предполагаем, что id уникален. Не может быть двух элементов массива с одинаковым id.
// Используйте метод .reduce в решении.

// End Task 13