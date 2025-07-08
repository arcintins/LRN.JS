// https://www.codewars.com/kata/5286d92ec6b5a9045c000087
function convertQueryToMap(query) {
  if (query === "") return {}
  let queryArr = query.split("&").map((el) => el.split("="))
  let result = {}

  for (let el of queryArr){
    let tmp = el[0].split(".")
    let path = result

    for (let i = 0; i < tmp.length; i++){
      if (i === tmp.length - 1) {
        path[tmp[i]] = el[1].replace("%20", " ").replace("%26", "&").replace("%3D", "=").replace("%3F", "?")
        break
      }

      if (!(tmp[i] in path)) {
        let newObj = {}
        path[tmp[i]] = newObj
      }
      path = path[tmp[i]]
    }
      
  }
  
  return result
}