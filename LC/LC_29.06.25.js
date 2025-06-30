// Задача 1. Фильтрация массива объектов по полю
// Дан массив пользователей. Отфильтруй только тех, кому больше 18 лет.

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 },
  { name: "David", age: 16 },
];

// Ожидаемый результат:
// [
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie', age: 19 }
// ]

function filterAdults(users) {
  return users.filter((el) => el.age > 18);
}

// console.log(filterAdults(users));

// Задача 2. Подсчёт количества повторяющихся элементов
// Посчитай, сколько раз встречается каждый элемент в массиве.
const input = ["a", "b", "a", "c", "b", "a"];

// Ожидаемый результат:
// { a: 3, b: 2, c: 1 }

function countOccurrences(arr) {
  return arr.reduce((result, el) => {
    if (!(el in result)) {
      result[el] = 1;
    } else {
      result[el] += 1;
    }
    return result;
  }, {});
}

// console.log(countOccurrences(input));

// Задача 3. Преобразование массива в объект по ключу
// Преобразуй массив пользователей в объект, где ключом будет id, а значением — весь объект пользователя.
const secondUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// Ожидаемый результат:
// {
//   1: { id: 1, name: 'Alice' },
//   2: { id: 2, name: 'Bob' },
//   3: { id: 3, name: 'Charlie' }
// }

function mapUsersById(users) {
  return users.reduce((result, el) => {
    result[el.id] = el;
    return result;
  }, {});
}

// console.log(mapUsersById(secondUsers));

// Задача 4. Сортировка и вывод топ-3 по полю
// Есть массив товаров. Отсортируй его по убыванию цены и выведи топ-3 самых дорогих.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 600 },
  { name: "Monitor", price: 300 },
  { name: "Keyboard", price: 100 },
];

// Ожидаемый результат:
// [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 600 }
// ]

function getTop3Expensive(products) {
  return products.sort((el1, el2) => el2.price - el1.price).slice(0, 3);
}

// console.log(getTop3Expensive(products));

// Задача 5. Преобразование объекта в массив
// Преобразуй объект вида { a: 1, b: 2 } в массив объектов вида { key: 'a', value: 1 }.

const secondInput = { a: 1, b: 2, c: 3 };

// Ожидаемый результат:
// [
//   { key: 'a', value: 1 },
//   { key: 'b', value: 2 },
//   { key: 'c', value: 3 }
// ]

function objectToArray(obj) {
  return Object.keys(obj).reduce((result, el) => {
    result.push({ key: el, value: obj[el] });
    return result;
  }, []);
}

// console.log(objectToArray(secondInput));

// Задача 6. Обработка заказов: фильтрация, сортировка и трансформация
// Описание:
// Представь, что ты получил от бэка список заказов. Нужно:
// -Оставить только оплаченные (status: 'paid') заказы.
// -Отсортировать их по сумме заказа (amount) по убыванию.
// -Преобразовать их в объект, где:
//   -ключом будет userId,
//   -значением — общая сумма всех заказов этого пользователя.

const orders = [
  { id: 1, userId: 101, status: "paid", amount: 250 },
  { id: 2, userId: 102, status: "pending", amount: 400 },
  { id: 3, userId: 101, status: "paid", amount: 300 },
  { id: 4, userId: 103, status: "paid", amount: 150 },
  { id: 5, userId: 102, status: "paid", amount: 500 },
  { id: 6, userId: 101, status: "cancelled", amount: 200 },
];

// После всех операций должен получиться объект:
// {
//     101: 550,
//     102: 500,
//     103: 150
// }

function processOrders(orders) {
  let tmp = orders
    .sort((el1, el2) => el2.amount - el1.amount)
    .filter((el) => el.status === "paid");

  return tmp.reduce((result, el) => {
    if (!(el.userId in result)) {
      result[el.userId] = el.amount;
    } else {
      result[el.userId] += el.amount;
    }
    return result;
  }, {});
}

// console.log(processOrders(orders));
