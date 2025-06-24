// Task 1
// У нас есть объект:
let user = { name: "John", years: 30 };

// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let {name, years: age, isAdmin = false} = user

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false

// End Task 1

// Task 2
// У нас есть объект salaries с зарплатами:
let salaries = {
  "John": 100,
  "Max": 1150,
  "Pete": 300,
  "Max 2": 1150,
  "Mary": 250,
  "Anna": 900,
};
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function topSalary(salaries){
    if (Object.keys.length === 0) return null;
    return Object.entries(salaries).reduce((max, [key, value]) => {
        if (max[1] < value) max = [key, value];
        return max;
    }, ["", -Infinity])
}

console.log(topSalary(salaries))

// End Task 2