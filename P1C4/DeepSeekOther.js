// Task 1
// Создайте функцию createPrivateStorage(obj, value), которая добавляет в переданный объект "приватное" свойство, используя Symbol. Это свойство должно:
// Быть недоступно через Object.keys(), for..in или Object.getOwnPropertyNames().
// Допускать чтение/запись только через специальные методы getPrivate() и setPrivate(value).

function createPrivateStorage(obj, value){
    const privateStorage = Symbol('privateStorage')
    obj[privateStorage] = value
    obj.getPrivate = function(){ return obj[privateStorage] }
    obj.setPrivate = function(value){ obj[privateStorage] = value }
    return obj
}

const user = {};
createPrivateStorage(user).setPrivate("Секретное значение")

console.log(Object.keys(user))
console.log(user.getPrivate())

// End Task 1

// Task 2
// Дан объект person, который может быть неполным (например, отсутствует address или street). 
// Напишите функцию getPersonStreet(obj), которая безопасно возвращает улицу пользователя или undefined, если её нет.

const person = {
    adress: {
        street: "Lenina",
        HouseNumber: 45. 
    }
}
console.log(getPersonStreet(person))

function getPersonStreet(personObj){
    return personObj?.adress?.street
}

// End Task 2

// Task 3
// Создайте объект counter с методом valueOf, который возвращает число 5. 
// Убедитесь, что при сложении counter + 2 получается 7.

const counter = {
    valueOf(){ return 5}
}
console.log(counter + 2)

// End Task 3

// Task 4
// Создайте объект temperature с методами [Symbol.toPrimitive](hint), который:
// При "number" возвращает 25 (число),
// При "string" возвращает "25 °C",
// При "default" возвращает "25 градусов".
// Проверьте его преобразование в разных контекстах: сложение с числом, вывод в alert() и шаблонной строке.

const temperature = {
    temp: 500,
    [Symbol.toPrimitive](hint){
        if (hint === "number") return this.temp
        if (hint === "string") return this.temp + " °C"
        if (hint === "default") return this.temp + " градусов" // Склонений не будет
    }
}

console.log(temperature + 5);
console.log(Number(temperature));
console.log(`${temperature}`);

// End Task 4
