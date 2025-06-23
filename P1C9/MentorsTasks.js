// Task 1
// // === Написать собственный класс массива (связанного списка) ===
// Задача от @Grand_devs
// Write a Class ( is maybe a few ) for a linked list with no using arrays (By operation, by printing is totaly fine)

class MyArray {
  constructor() {
    [this.nodeEl, this.head, this.len, this.isValue, this.lastNode] = [undefined, null, 0, false, this];
  }
  
  pushEl(el) {
    if (this.len === 0){
      [this.nodeEl, this.isValue] = [el, true];
      this.len++;
      return
    }

    this.lastNode.head = new MyArray();
    this.lastNode = this.lastNode.head;
    [this.lastNode.nodeEl, this.lastNode.isValue] = [el, true];

    this.len++;
  }
  
  deleteEl(index) {
    if (index > this.len || index < 1) return;
    let counter = 1;
    let next = this.head;
    let current = this;

    while (counter <= index) {
      if (counter === index) {
        if (next !== null) {
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
    this.lastNode = current
    this.len--;

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

let arr = new MyArray();
arr.printList(); // []

arr.pushEl(1);
arr.printList(); // [ 1 ]
arr.pushEl({});
arr.pushEl(3);
arr.printList(); // [ 1, {}, 3 ]

arr.deleteEl(2);
arr.printList(); // [ 1, 3 ]

arr.pushEl(10);
arr.pushEl(false);
arr.pushEl(undefined);
arr.pushEl("String");
arr.printList(); // [ 1, 3, 10, false, undefined, "String" ]

arr.deleteEl(5);
arr.printList(); // [ 1, 3, 10, false, "String" ]

// End Task 1