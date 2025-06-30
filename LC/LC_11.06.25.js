// https://ya.cc/t/FjDWrUwO6yEjhk
// Реализуйте функцию, которая вычисляет разницу между двумя списками. Функция должна удалить все вхождения элементов из первого списка ( a), которые присутствуют во втором списке ( b). Порядок элементов в первом списке должен быть сохранен в результате.
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Примеры
// Если a = [1, 2]и b = [1], то результат должен быть [2].

// Если a = [1, 2, 2, 2, 3] и b = [2], то результат должен быть [1, 3].

const a = [1, 2, 2, 2, 3]
const b = [2]

function search_diff(a, b) {
      b.forEach(element => {
      let isDeleting = true
      while (isDeleting){
        let index = a.indexOf(element)
        if (index == -1){
          isDeleting = false
          continue
        }
        a.splice(index, 1)
      }
    });
    return a                                          
}

console.log(search_diff(a, b))

// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку этих чисел в виде номера телефона.
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Пример
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// Для выполнения этого задания необходимо вернуть правильный формат.
// Не забудьте пробел после закрывающих скобок!

function createPhoneNumber(arr) {
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

/* Реализовать функцию, которая будет суммировать числа и выводить их логи

    Пример
    sum(5)(4)(11)

    result log
        5
        9
        20
*/

function sum(n) {
    // СКИП
}

// sum(1)(5)(10)(1);

/* Уникальность всех символов в строке
Напишите функцию, которая определяет уникальны ли все символы в строке. Регистр должен учитываться 'a' и 'A' разные символы.
Input: String
Output: Boolean
*/

function isUnique(string) {
    const set = new Set(string.split(''))
    return set.size == string.length
}

// console.log(isUnique("abcdef")); // true
// console.log(isUnique("123456")); // true
// console.log(isUnique("abcABC")); // true
// console.log(isUnique("abcadef")); // false

/*Плоский массив
Напишите функцию, принимающую массив с вложенными массивами и распакуйте в результатирующий плоский массив. В результате должны получить новый одномерный массив.
Input: Array
Output: Array

*/

function flatten(array) {
  
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // => [1, 2, 3, 4]

/*Удаление всех повторяющихся символов в строке
Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены
Input: String
Output: String

*/

function removeDupes(str) {
    const set = new Set(str.split(''))
    let result = ''
    set.forEach(element => {
        result += element
    })
    return result
}

// console.log(removeDupes('abcd')); // 'abcd
// console.log(removeDupes('aabbccdd')); // 'abcd
// console.log(removeDupes('abcddbca')); // 'abcd
// console.log(removeDupes('abababcdcdcd')); // 'abcd

/* Какая строка встречается чаще всего
Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. 
Если таких строк несколько, то нужно вернуть первую, идя слева направо.
*/

function highestFrequency(array) { // Решение адекватного человека
  const obj = {};

  array.forEach((elem) => {
    if (!obj.hasOwnProperty(elem)) {
      obj[elem] = 1;
    } else {
      obj[elem] += 1;
    }
  });

  const max = Math.max(...Object.values(obj));
  return Object.keys(obj).filter((elem) => obj[elem] === max)[0];
}

function highestFrequency(array) { // Шизофренический бред
    const set = new Set(array)
    let arrayLengths = {}
    set.forEach(element => {
        arrayLengths[element] = array.filter(x => x == element).length
    })
    let sortedArray = {}
    sortedArray = Object.fromEntries(
        Object.entries(arrayLengths).sort((a, b) => a[1] - b[1])
    )
    let isDeleting = true
    let sortedArrayKeys = Object.keys(sortedArray)
    while(isDeleting) {
    if (sortedArray[sortedArrayKeys[sortedArrayKeys.length - 1]] == sortedArray[sortedArrayKeys[sortedArrayKeys.length - 2]]) { // Таков путь :(
      delete sortedArray[sortedArrayKeys[sortedArrayKeys.length - 1]]
      sortedArrayKeys = Object.keys(sortedArray)
      continue
    }
    return sortedArrayKeys[sortedArrayKeys.length - 1]
    }
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi