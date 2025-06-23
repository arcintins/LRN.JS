// Task 1
// Возможно ли создать функции A и B, чтобы new A() == new B()?
array = {}

function A() { return array }
function B() { return array }

let a = new A();
let b = new B();

console.log( a == b ); // true
// Если да – приведите пример вашего кода.
// *= Необхоходимо переопределить неявное возвращение объекта в функциях конструкторах на один объект

// End Task 1

// Task 2
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator(){
    this.read = function(a, b){ [this.a, this.b] = [a, b] }
    this.sum = function(){ return this.a + this.b}
    this.mul = function(){ return this.a * this.b}
}

let calculator = new Calculator();
calculator.read(15, 2);

console.log( "Sum = " + calculator.sum() );
console.log( "Mul = " + calculator.mul() );

// End Task 2

// Task 3
// Создайте функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() должен использовать prompt (*Для упрощения, будет реализация через параметры) для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений, с учётом начального значения startingValue.

function Accumulator(startingValue = 0){
    this.value = startingValue
    this.read = function (value){ this.value += value }
}

// Ниже вы можете посмотреть работу кода:
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

console.log(accumulator.value); // выведет сумму этих значений

// End Task 3