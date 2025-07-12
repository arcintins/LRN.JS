// Task 1
// === Календарь на месяц ===
// Задача: Напишите функцию, которая принимает год и месяц (1-12) 
// и выводит в консоль календарь на этот месяц в виде:
// Май 2024  
// Пн Вт Ср Чт Пт Сб Вс  
//        1  2  3  4  5  
//  6  7  8  9 10 11 12  
// 13 14 15 16 17 18 19  
// 20 21 22 23 24 25 26  
// 27 28 29 30 31  

function printMonth(year, month) {
  let printWeekDays = "Пн Вт Ср Чт Пт Сб Вс";
  let printMonth = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"][month - 1];
  let dateFirstDay = new Date(year, month - 1, 1);
  let dateLastDay = new Date(year, month, 0);
  let days = [];

  for (let i = 1; i <= dateLastDay.getDate(); i++) { 
    days.push(i < 10 ? " " + i : String(i));
  };
  startWeekDay = dateFirstDay.getDay() === 0 ? 6 : dateFirstDay.getDay() - 1;

  for (let i = 0; i < startWeekDay; i++) {
    days.unshift("  ");
  }

  console.log(`${printMonth} ${year}`);
  console.log(printWeekDays);
  for (let i = 0; i < Math.ceil(days.length / 7); i++){
    console.log(days.slice(i * 7, i * 7 + 7).join(" "));
  }
}

printMonth(2024, 5);
// End Task 1

// Task 2
// === "Биологические часы" (Таймер до следующего часа) ===
// Задача: Напишите функцию, которая выводит в консоль обратный отсчет до начала следующего часа в формате:
// "До 15:00 осталось: 14 минут 32 секунды" (обновляется каждую секунду).

function nextHourTimer(){
  let now = new Date();
  let nextHour = new Date();
  nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);

  let differentSeconds = (nextHour - now) / 1000;
  let differentMinutes = Math.floor(differentSeconds / 60);

  console.log(`До ${nextHour.getHours()}:00 осталось: ${differentMinutes} минут ${Math.floor(differentSeconds % 60)} секунд`);
  now = +now + 1000;
  let timer = setInterval(() => {
    differentSeconds = Math.floor((nextHour - now) / 1000);
    differentMinutes = Math.floor(differentSeconds / 60);

    console.log(`До ${nextHour.getHours()}:00 осталось: ${differentMinutes} минут ${Math.floor(differentSeconds % 60)} секунд`);
    now = +now + 1000;
    if (now > nextHour) clearInterval(timer);
  }, 1000);

}

nextHourTimer()
// End Task 2


