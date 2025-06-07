// Task 1
// Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  // function() { alert("Вы согласились."); },
  // function() { alert("Вы отменили выполнение."); } 
  () => alert("Вы согласились."), // Замена 11й строки
  () => alert("Вы отменили выполнение."), // Замена 12й строки
);

// End Task 1