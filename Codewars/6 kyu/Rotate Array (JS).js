// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4
function rotate(array,n){
  let realRotate = n > 0 ? n % array.length : array.length + n % array.length;
  let newArr = [...array.slice(array.length - realRotate), ...array.slice(0, array.length - realRotate)]
  return newArr;
}