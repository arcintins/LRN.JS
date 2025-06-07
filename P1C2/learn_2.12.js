// Task 1
// Что выведет код ниже?

alert(undefined ?? NaN ?? null ?? "" ?? " "); // Первое определенное значение - NaN

// End Task 1

// Task 2
// Что будет выведено в итоге?

let city = null;

city ??= "Берлин";
city ??= null;
city ??= "Кёльн";
city ??= "Гамбург";

alert(city); // Берлин

// End Task 2

// Task 3
// Перепишите этот код используя операторы нулевого слияния и присваивания.

let num1 = 10,
    num2 = 20,
    result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }

result ??= num1 ?? num2;

// End Task 3