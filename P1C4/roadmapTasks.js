// Task 1
// Как сделать, чтобы объект:
// был равен определенному числу?
// был равен определенной строке?

const obj1 = {
    toString(){
        return "return"
    },
    valueOf(){
        return 5
    },
}

// End Task 1

// Task 2
// obj2 > 0 // true. Как это сделать?
const obj2 = {
    valueOf(){
        return 5
    },
}

console.log(obj2 > 0) // true

// End Task 2

// Task 3
// String(obj < 0) + String(obj < 0) // "truefalse". Как это сделать?

const obj = {
    isCompare: true,
    valueOf(){
        if(this.isCompare) {
            this.isCompare = false
            return -5
        }
        return 5
    }
}

console.log(String(obj < 0) + String(obj < 0)) // "truefalse"

// End Task 3