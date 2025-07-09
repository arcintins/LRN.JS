// https://www.codewars.com/kata/61393fd03e441f001ac9c7d4/javascript
function formatNumber(number, template) {
  template = template.split("")
  number = String(number);
  if (template.reduce((sum, el) => el === "#" ? sum + 1 : sum, 0) > number.length) return "Invalid phone number";
  
  let currentIndex = 0;
  
  for (let i = 0; i < template.length; i++){
    if (template[i] === "#") {
      template[i] = number[currentIndex];
      currentIndex++;
    }
  }
  return template.join("")
}