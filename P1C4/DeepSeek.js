// Task 1
// === Создание и модификация объекта ===
// Создайте объект car со свойствами:
// brand (строка)
// model (строка)
// year (число)
// isRunning (булево, по умолчанию false)
// Затем добавьте метод startEngine, который меняет isRunning на true и выводит в консоль "Двигатель запущен".

car = {
    brand: "Mini",
    model: "Clubman Cooper",
    year: 2016,
    isRunning: false,
    startEngine(){
        this.isRunning = true
        console.log("Двигатель запущен")
    }
}

// End Task 1

// Task 2
// === Подсчёт свойств объекта ===
// Напишите функцию countProperties(obj), которая принимает объект и возвращает количество его свойств.
// Пример:
const user = { name: "Alex", age: 30, job: "Developer" };
console.log(countProperties(user)); // 3

function countProperties(obj) {
    return Object.keys(obj).length
}

// End Task 2

// Task 3
// === Объединение объектов ===
// Напишите функцию mergeObjects(obj1, obj2), которая объединяет два объекта в один (в случае совпадения ключей приоритет у obj2).
// Пример:
const user1 = { name: "Alex1", age: 31, job: "Developer1", time: "18:00" };
const user2 = { name: "Alex2", age: 32, job: "Developer2", secondName: "Brut" };
console.log(mergeObjects(user1, user2))

function mergeObjects(obj1, obj2){
    let result = {}
    Object.entries(user1).forEach((el) => {result[el[0]] = el[1]})
    Object.entries(user2).forEach((el) => {result[el[0]] = el[1]})
    return result
}

// End Task 3

// Task 4
// === Поиск максимального значения в объекте ===
// Дан объект с числовыми значениями. Напишите функцию findMaxValue(obj), которая возвращает максимальное значение.
// Пример:
const scores = { test: 104, math: 90, physics: 85, chemistry: 95 };
console.log(findMaxValue(scores)); // 95

function findMaxValue(obj){
    let max = -Infinity
    for (key in obj){
        if (obj[key] > max) max = obj[key]
    }
    return max
}

// End Task 4

// Task 5
// === Удаление falsy-значений из объекта ===
// Напишите функцию removeFalsyValues(obj), которая удаляет все свойства объекта, значения которых являются false, 0, "", null, undefined или NaN.
// Пример:
const data = { a: 1, b: 0, c: "hello", d: "", e: null, f: NaN, test: undefined, test2: false };
removeFalsyValues(data);
console.log(data); // { a: 1, c: "hello" }

function removeFalsyValues(obj){
    for (key in obj){
        if (!obj[key]) delete obj[key]
    }
}

// End Task 5

// Task 6
// === Динамический this в цепочке методов с callback-функцией ===
// Есть объект calculator, который имеет методы для выполнения математических операций. 
// Однако один из методов (power) принимает callback, и внутри него this теряется. 
// Нужно исправить код так, чтобы все методы работали корректно.

const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this; // Возвращаем this для чейнинга
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  power(callback) {
    // Внутри callback this должен ссылаться на calculator
    callback(); // Как исправить, чтобы this не терялся?
    return this;
  },
  getValue() {
    return this.value;
  }
};

// Пример использования (должно работать):
const result = calculator
  .add(5)
  .subtract(2)
  .multiply(3)
  .power(function() {
    this.value = Math.pow(this.value, 2); // this должен быть calculator
  }.bind(calculator)) // *= Добавлен метод bind с привязкой к объекту calculator
  .getValue();

console.log(result); // Ожидается ((5 - 2) * 3)^2 = 81

// End Task 6