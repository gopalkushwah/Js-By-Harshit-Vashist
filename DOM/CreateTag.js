const todoList = document.querySelector(".todo-list");


// ===================  using InnerHtml ===========================

// console.log(todoList.innerHTML);

// it will not add new data it will replace the whole li tag 
// todoList.innerHTML = "<li>New todo</li>";
// todoList.innerHTML = "<li>New todo second</li>";


// to add new li tag 
// todoList.innerHTML += "<li>New todo second</li>";
// todoList.innerHTML += "<li>go to gym</li>";
// todoList.innerHTML += "<li>javascript padna hai</li>";

// when not to use 
// when we want to add new html element dont use this way 
// never use this way to add new data into html page 
// it will re render the whole ul tag 

// when  to use 
// when we want to replace any tag then use innerHtml 


