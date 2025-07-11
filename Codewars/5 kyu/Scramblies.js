// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/javascript
function scramble(str1, str2) {
  
  const getCharCount = (str) => {
    return str.split("").reduce((counter, char) => {
      if (!(char in counter)) {
        counter[char] = 1
      } else {
        counter[char]++;
      }
      return counter
    }, {});
  } 
  
  let [str1Chars, str2Chars] = [getCharCount(str1), getCharCount(str2)];

  for (key in str2Chars){
    if (!(key in str1Chars)) return false
    if (str2Chars[key] > str1Chars[key]) return false
  }
  return true
}
