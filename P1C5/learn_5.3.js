// Task 1
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam("innocent rabbit")); // false

function checkSpam(str){
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');
}

// End Task 1

// Task 2
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, 
// если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)); // "Вот, что мне хотело…"
console.log(truncate("Всем привет!", 20)); // "Всем привет!"

function truncate(str, maxlength){
    return str.length <= maxlength - 1 ? str : str.slice(0, maxlength - 1) + "...";
}

// End Task 2

// Task 3
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
console.log(ucFirst("вася")); // "Вася"

function ucFirst(str){
    return str ? str[0].toUpperCase() + str.slice(1) : str;
}

// End Task 3

// Task 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
console.log(extractCurrencyValue('$120') === 120); // true

function extractCurrencyValue(str){
    return +str.slice(1);
}

// End Task 4