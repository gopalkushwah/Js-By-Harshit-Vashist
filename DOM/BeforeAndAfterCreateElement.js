// before and after is used to add any element before or after of any selected element

//selecting element
const todoList = document.querySelector(".todo-list");
console.log(todoList);

//creating new Element "ul"
const newElement = document.createElement("ul");

// adding class to Element newElement
newElement.classList.add("newElement");
newElement.classList.add("todo-list");
console.log(newElement);

//creating new Element "li"
const newList = document.createElement("li");
// newList.textContent = "Hello freinds";
newList.innerText = "Hello freinds";
const newList1 = document.createElement("li");
newList1.textContent = "my name is Gopal";
console.log(newList);


// adding li element inside the ul element 
newElement.append(newList);
newElement.append(newList1);

// adding ul element before the selected ".todo-list" class element
// todoList.before(newElement);

// adding ul element after the selected ".todo-list" class element
todoList.after(newElement);