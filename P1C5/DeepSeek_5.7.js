// Task 1
// === "Генератор уникальных ID" ===
// Задача: Напишите функцию, которая генерирует уникальный случайный ID (например, "x7h9k2") 
// длиной 6 символов. Используйте Set, чтобы гарантировать уникальность даже при массовой генерации.

class GeneratorID {
  static IDs = new Set();

  static genUniqID() {
    let id;
    do {
      id = Math.random().toString(36).slice(2, 8).toUpperCase();
    } while(GeneratorID.IDs.has(id));
    GeneratorID.IDs.add(id);
    return id;
  }
}

console.log(GeneratorID.genUniqID());

// End Task 1

// Task 2
// === "Поиск пересечений в массивах" ===
// Задача: Даны 3 массива. Найдите элементы, 
// которые присутствуют во всех трёх, используя Set.

const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 5, 6];
const arr3 = [3, 4, 2, 7];

let set1 = new Set(arr1);
let set2 = new Set(arr2);
let set3 = new Set(arr3);

console.log([...set1].filter(el => set2.has(el) && set3.has(el)))

// End Task 2

// Task 3
// === "Кэширование результатов функции" ===
// Задача: Реализуйте функцию-мемоизатор для кэширования 
// результатов дорогих вычислений, используя Map.

const chache = new Map();

function pow2Chached(n){
  if (chache.has(n)) return chache.get(n);

  let result = n ** 2;
  chache.set(n, result);
  return result;
}

// End Task 3