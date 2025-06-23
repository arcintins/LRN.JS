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
