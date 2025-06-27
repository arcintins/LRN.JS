// Task 1
// === "Итерируемый объект для диапазона чисел" ===
// Необходимо создать объект range, который будет представлять диапазон чисел и может быть использован в цикле for..of.
// Требования:
// Объект должен инициализироваться с начальным и конечным значением диапазона: new Range(from, to)
// Объект должен быть итерируемым (иметь метод Symbol.iterator)
// Итератор должен возвращать числа из диапазона по порядку
// Должна поддерживаться работа с отрицательными числами и обратными диапазонами (где from > to)

function Range(from, to){
    [this.from, this.to] = [from, to];
    this[Symbol.iterator] = function(){
      return {
        current: this.from,
        last: this.to,
        currentStatic: this.from,
        next(){
          if (this.currentStatic < this.last) {
            if (this.current <= this.last) {return {done: false, value: this.current++};}
            else {return { done: true};};
          } else {
            if (this.current >= this.last) {return {done: false, value: this.current--};}
            else {return { done: true};};
          }
        }
      }
    }
}

// Пример использования:
const range = new Range(3, 7);

for (const num of range) {
  console.log(num); // Должно вывести: 3, 4, 5, 6, 7
}

const negativeRange = new Range(-2, 2);
console.log([...negativeRange]); // Должно вывести: [-2, -1, 0, 1, 2]

const reverseRange = new Range(5, 1);
console.log(Array.from(reverseRange)); // Должно вывести: [5, 4, 3, 2, 1]

// End Task 1