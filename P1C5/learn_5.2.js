// Task 1
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

let a = prompt("Enter number a: ", "");
let b = prompt("Enter number b: ", "");
console.log(a + b);

// End Task 1

// Task 2
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:
console.log( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
// *= Из за потери точности
console.log( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?
console.log(Math.round(6.35 * 10) / 10);

// End Task 2

// Task 3
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function enterNumber(){
    let a;
    do {
        a = prompt("Enter number: ", "");
        if (a === null || a === "") return;
        if (isFinite(a)) return +a
    } while (true)
}

// End Task 3

// Task 4
// Этот цикл – бесконечный. Он никогда не завершится, почему?
let i = 0;
while (i != 10) {
  i += 0.2;
}
// *= Потому, что 0.2 теряется из запотери точности

// End Task 4

// Task 5
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:

console.log(random(1, 5)); // 1.2345623452
console.log(random(1, 5)); // 3.7894332423
console.log(random(1, 5)); // 4.3435234525

function random(min, max){
    return Math.random() * (max - min) + min
}

// End Task 5

// Task 6
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:

console.log(randomInteger(1, 5)); // 1
console.log(randomInteger(1, 5)); // 3
console.log(randomInteger(1, 5)); // 5

function randomInteger(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// End Task 6