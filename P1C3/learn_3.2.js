// Task 1
// Какие недостатки вы видите в стиле написания кода этого примера?

// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else
// {
//   alert(pow(x,n))
// }

// Везде добавлены пробелы

function pow(x, n) { // { - перенесена с 5 строки на 4
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  } // Разбито на несколько строк для лучшей читаемости
  return result;
}

let x = prompt("x?", ""), // Одинарные ковычки заменены на двойные, для поддержки единого стиля 
    n = prompt("n?", "");  // Переменная n перенесена на следующую строку для лучшей читаемости, добавлен символ ; в конце

if (n <= 0) { // { перенесены в блоки с инструкциями
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x, n))
}

// End Task 1