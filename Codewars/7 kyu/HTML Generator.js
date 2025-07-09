// https://www.codewars.com/kata/54eecc187f9142cc4600119e
function HTMLGen () {
  
  this.gen = function(value, wrapper) {
    return wrapper !== "comment" ? `<${wrapper}>${value}</${wrapper}>` : `<!--${value}-->`
  }
  
  this.a = function(value){ return this.gen(value, "a")} 
  this.b = function(value){ return this.gen(value, "b")} 
  this.p = function(value){ return this.gen(value, "p")} 
  this.body = function(value){ return this.gen(value, "body")} 
  this.div = function(value){ return this.gen(value, "div")} 
  this.span = function(value){ return this.gen(value, "span")} 
  this.title = function(value){ return this.gen(value, "title")} 
  this.comment = function(value){ return this.gen(value, "comment")} 
  
}