// https://learn.javascript.ru/recursion#tasks
// Task 1
{
  function sumToCycle(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) { sum += i; }
    return sum
  }

  function sumToRecursion(n) {
    if (n === 1) { return 1; }
    return n + sumToRecursion(n - 1);
  }

  function sumToFormula(n) { return n * (n + 1) / 2; }

  console.log(sumToCycle(100));
  console.log(sumToRecursion(100));
  console.log(sumToFormula(100));
}
// End Task 1

// Task 2
{
  function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
  }
  console.log(factorial(5));
}
// End Task 2

// Task 3
{
  function fib(n) {
    let [n1, n2] = [1, 1];
    for (let i = 2; i < n; i++) {
        let n3 = n1 + n2;
        [n1, n2] = [n2, n3];
    }
    return n2;
  }
  console.log(fib(77));
}
// End Task 3

// Task 4 / 5
{
  // BETTER CHECK THIS 
  // => https://github.com/arcintins/LRN.JS/blob/main/P1C9/MentorsTasks.js
}
// End Task 4 / 5
