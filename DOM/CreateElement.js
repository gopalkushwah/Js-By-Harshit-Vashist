const newTodoItem = document.createElement("li");
const newTodoItem1 = document.createElement("li");
// console.log(newTodoItem);
// const newTextNode = document.createTextNode("Teach Students");
// newTodoItem.innerText = "Teach Students";
newTodoItem.textContent = "Teach Students";
newTodoItem1.textContent = "Learn New";
// console.log(newTextNode);
// newTodoItem.appendChild(newTextNode);
console.log(newTodoItem);
console.log(newTodoItem1);

const todoList = document.querySelector(".todo-list");

// append --->  it will add element at the last 
todoList.append(newTodoItem);


// Prepend --->  it will add element at the stating 
todoList.prepend(newTodoItem1);



// remove() ---> to remove an element
// todoList.remove();    //it will remove all the element which containes ".todo-list"  class in html form
// newTodoItem1.remove();   //it will remove only newTodoItem1 because it is selcted
// newTodoItem.remove();   //it will remove only newTodoItem1 because it is selcted

// const todoList1 = document.querySelector(".todo-list li");  //in todo-list class only li element is selected


// todoList1.remove();  //it will remove only li element , comment out the ancer tag in html form to see this






