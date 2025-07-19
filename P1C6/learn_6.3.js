// Task 1
// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).
{
  function sum(a) {
    return function(b) {
      return a + b;
    }
  }
  console.log(sum(1)(2))
}
// End Task 1

// Task 2
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. 
// Если она возвращает true, то элемент добавится в возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
{
  function inBetween(n1, n2) {
    return (x) => x >= n1 && x <= n2;
  }

  function inArray(arr) {
    return (x) => x in arr;
  }
  let arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(arr.filter(inBetween(3, 6)));
  console.log(arr.filter(inArray([1, 2, 10])));
}
// End Task 2

// Task 3
// У нас есть массив объектов, который нужно отсортировать:
{
  let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
  ];
// Обычный способ был бы таким:
// по имени (Анна, Иван, Пётр)
// users.sort((a, b) => a.name > b.name ? 1 : -1);
// по возрасту (Пётр, Анна, Иван)
// users.sort((a, b) => a.age > b.age ? 1 : -1);

// Можем ли мы сделать его короче, например вот таким?
// users.sort(byField('name'));
// users.sort(byField('age'));
// То есть чтобы вместо функции мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }

  users.sort(byField('name'));
  console.log(users);
  users.sort(byField('age'));
  console.log(users);
}

// End Task 3
