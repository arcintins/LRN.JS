// Task 1
// === Написать функцию глубокого клонирования объекта ===
// Задача от @Grand_devs
// Напишите функцию deepClone(obj), которая глубого клонирует объект, без использования рекурсии.
// Подсказка: нужно использовать стек.
function deepClone(obj){
  let stack = []
  let result = {}

  for (key in obj){
    if (typeof obj[key] === "object") {
      result[key] = {}
      stack.push([result[key], obj[key]])
      continue
    }
    result[key] = obj[key]
  }

  while (stack.length != 0){
    for (let i = 0; i < stack.length; i++){
      for (key in stack[i][1]){
        if (typeof stack[i][1][key] === "object"){
          stack[i][0][key] = {}
          stack.push([stack[i][0][key], stack[i][1][key]])
          continue
        }
        stack[i][0][key] = stack[i][1][key]
      }
    }
    stack.shift()
  }

  return result
}

let user = {
  name: "Dmitry",
  age: 27,
  car: {
    brand: "Mini",
    model: "Cooper",
    shop: {
      adress: "Monolit",
      owner: {
        name: "Vadim",
        age: 32
      },
      secondOwner: {
        name: "Alex",
        age: 52
      },
    },
    prevOwner: {
      name: "Petr"
    },
  },
  wife: {
    name: "Anna",
    age: 25
  }
}

let userClone = deepClone(user)
// console.log(userClone)

str = JSON.stringify(userClone, null, 2);
console.log(str);

// End Task 1