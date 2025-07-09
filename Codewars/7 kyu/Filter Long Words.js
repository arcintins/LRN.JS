// https://www.codewars.com/kata/5697fb83f41965761f000052/javascript
function filterLongWords(sentence, n) {
  return sentence.split(" ").reduce((result, el) => el.length > n ? [...result, el] : result, [])
}