// // querySelectorAll() returns and object called NodeList and Nodelist is an static object
// // it has fixed ammount of key and value pair
// // it doesnt changes amount of key and value pair

// // const ul = document.querySelectorAll(".todo-list li");  //NodeList(5) [li, li, li, li, li] total count of li is 5 and its fixed
// // console.log(ul);

// // ------------------------------------------------------------------------

// const ul = document.querySelector(".todo-list");  
// const li = ul.querySelectorAll("li");  //NodeList(5) [li, li, li, li, li] total count of li is 5 and its fixed
// console.log(li);

// const newList = document.createElement("li");
// ul.append(newList);
// console.log(ul);
// console.log(li);

// ================================================================================================================================
// getElementBySomething() returns and object called HTMLCollection and HTMLCollection is an live object
// it doesnt fixed ammount of key and value pair
// it changes amount of key and value pair

// const ul = document.getElementsByClassName(".todo-list");  
// console.log(ul);

// ------------------------------------------------------------------------

const ul = document.querySelector(".todo-list");  
const li = ul.getElementsByTagName("li");  
console.log(li);  //HTMLCollection(5) [li, li, li, li, li]

const newList = document.createElement("li");
ul.append(newList);
console.log(ul);
console.log(li); //HTMLCollection(6) [li, li, li, li, li, li]





