// https://www.codewars.com/kata/563f879ecbb8fcab31000041/javascript
function factory(x){
  let n = x;
  return function(arr){
    return arr.reduce((res, el) => {
      res.push(el * n);
      return res;
    }, [])
  }
}