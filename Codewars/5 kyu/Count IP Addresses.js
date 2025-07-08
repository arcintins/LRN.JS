// https://www.codewars.com/kata/526989a41034285187000de4
function ipsBetween(start, end){
  let startArr = start.split(".");
  let endArr = end.split(".");
  
  startArr = startArr.map((el, index) => {
    return el * 2 ** (8 * (startArr.length - index - 1))
  }).reduce((sum, el) => sum + el);
  
  endArr = endArr.map((el, index) => {
    return el * 2 ** (8 * (endArr.length - index - 1))
  }).reduce((sum, el) => sum + el);
  
  return -(startArr - endArr);
}