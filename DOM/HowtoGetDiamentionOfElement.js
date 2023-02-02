//how to get diamentiom of an element 
//height /width/top/bottom/left/right/x/y

const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo);

// this all values are dynamic ===> depends on the size of screen 
const info = sectionTodo.getBoundingClientRect();
const height = sectionTodo.getBoundingClientRect().height;
const width = sectionTodo.getBoundingClientRect().width;
console.log(info);
console.log(height);
console.log(width);
