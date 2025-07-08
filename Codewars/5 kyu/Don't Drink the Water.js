// https://www.codewars.com/kata/562e6df5cf2d3908ad00019e
function separateLiquids(glass) {
  let glassW = glass?.[0]?.length;
  let glassH = glass.length;
  if (!glassW) return [];
  let w = { H: 1, W: 2, A: 3, O: 4 };
  let tmp = glass.flat(Infinity).sort((el1, el2) => w[el2] - w[el1]);
  let result = [];
  for (let i = 0; i < glassH; i++) {
    result.push(tmp.splice(0, glassW))
  }
  
  return result;
}