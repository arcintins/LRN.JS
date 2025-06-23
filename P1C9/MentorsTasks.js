// Task 1
// // === Написать собственный класс массива (связанного списка) ===
// Задача от @Grand_devs
// Write a Class ( is maybe a few ) for a linked list with no using arrays (By operation, by printing is totaly fine)

class myArray {
  constructor() {
    [this.head, this.len, this.isValue] = [null, 0, false];
  }
  
  pushEl(el) {
    let next = this.head;
    let current = this;

    while (next !== null){
      current = next;
      next = next.head;
    }

    [current.nodeEl, current.head, current.isValue] = [el, new myArray(), true];
    this.len++;
  }
  
  deleteEl(index) {
    if (index > this.len || index < 1) return;
    let counter = 1;
    let next = this.head;
    let current = this;

    while (counter <= index) {
      if (counter === index) {
        if (next.isValue) {
          [current.head, current.nodeEl] = [next.head, next.nodeEl];
          break;
        }
        [current.isValue, current.nodeEl, current.head] = [false, undefined, null];
        break;
      }
      current = next;
      next = next.head;
      counter++;
    }
    current.len--;

  }

  printList() {
    let result = [];
    let next = this.head;

    if (this.isValue) { result.push(this.nodeEl) }

    while (next !== null) {
      if (next.isValue) { result.push(next.nodeEl) }
      next = next.head;
    }

    console.log(result);
  }
}

let arr = new myArray();
arr.printList(); // []

arr.pushEl(1);
arr.pushEl({});
arr.pushEl(3);
arr.printList(); // [ 1, {}, 3 ]

arr.deleteEl(2);
arr.printList(); // [ 1, 3 ]

arr.pushEl(10);
arr.pushEl(false);
arr.pushEl(undefined);
arr.pushEl("String");
arr.printList(); // [ 1, 3, 10, false, undefined, 'Jopa' ]

arr.deleteEl(5);
arr.printList(); // [ 1, 3, 10, false, 'String' ]

// End Task 1