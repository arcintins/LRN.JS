// Task 1
// Что выведет код ниже?

alert( null || 2 || undefined ); // Первое true значение, 2
// alert 2

// End Task 1

// Task 2
// Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); 
// alert(1), который не имеет инструкции возврата, после выполнения на его месте будет undefined, который является false выражением, 
// после чего 2
// alert 1 -> 2

// End Task 2

// Task 3
// Что выведет код ниже?

alert( 1 && null && 2 ); // Первое false значение, null
// alert null

// End Task 3

// Task 4
// Что выведет код ниже?

alert( alert(1) && alert(2) ); // 1, после чего undefined
// 1 -> undefined

// End Task 4

// Task 5
// Что выведет код ниже?

alert( null || 2 && 3 || 4 ); // У оператора && выше приоретет выполнения, а значит он будет выполнятся первым и вернет 3
// после чего 3
// alert 3

// End Task 5

// Task 6
// Что выведет код ниже?

let value = NaN;

value &&= 10; // NaN конвертирутся в false, value = NaN
value ||= 20; // value = 20
value &&= 30; // 20 конвертируется в true, value = 30
value ||= 40; // value = 30

alert(value);
// alert 30

// End Task 6

// Task 7
// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

(age >= 14 && age <= 90);

// End Task 7

// Task 8
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

(!(age >= 14 && age <= 90));
(age < 14 || age > 90);

// End Task 8

// Task 9
// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' ); // Выполниться, -1
if (-1 && 0) alert( 'second' ); // Не выполниться, 0
if (null || -1 && 1) alert( 'third' ); // Выполниться 1

// End Task 9

// Task 10
// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

let login = prompt("Введите логин");

if (login == "Админ") {
  let password = prompt("Введите логин")
  alert((password == null || password == '') ? "Отменено" :
        (password == "Я главный") ? "Здравствуйте" : "Неверный пароль")
} else if (login == null || login == '') {
  alert("Отменено")
} else {
  alert("Я вас не знаю")
}

// End Task 10