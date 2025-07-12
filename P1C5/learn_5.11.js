// Task 1
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
console.log(new Date(2012, 1, 20, 3, 12));

// End Task 1

// Task 2
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return days[date.getDay()];
}
// Например:
let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"
// End Task 2

// Task 3
// В Европейских странах неделя начинается с понедельника (день номер 1), 
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). 
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

function getLocalDay(date) {
  let day = date.getDay();
  return day == 0 ? 7 : day
}

let date1 = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getLocalDay(date1));       // вторник, нужно показать 2
// End Task 3

// Task 4
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

function getDateAgo(date, days) {
  let result = new Date(date);
  result.setDate(date.getDate() - days);
  return result.getDate();
}

let date2 = new Date(2015, 0, 2);

console.log(getDateAgo(date2, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date2, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date2, 365)); // 2, (2 Jan 2014)
// End Task 4

// Task 5
// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры:
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function getLastDayOfMonth(year, month){
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2020, 0))
console.log(getLastDayOfMonth(2020, 1))
console.log(getLastDayOfMonth(2021, 1))
// End Task 5

// Task 6
// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToday(){
  let currentTime = new Date();
  let today = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate())
  return (currentTime - today) / 1000;
}

console.log(getSecondsToday());
// End Task 6

// Task 7
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToTomorrow(){
  let currentTime = new Date();
  let yesterday = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1)
  return (yesterday - currentTime) / 1000;
}

console.log(getSecondsToTomorrow())
// End Task 7

// Task 8
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". 
// А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(){
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear().slice(-2);
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let different = (new Date() - date) / 1000;
  let differentMins = different / 60;
  let differentHours = differentMins / 60;

  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (different < 1) return 'прямо сейчас';
  if (differentMins < 1) return `${different} сек. назад`;
  if (differentHours < 1) return `${differentMins} мин. назад`;
  return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
}

// End Task 8