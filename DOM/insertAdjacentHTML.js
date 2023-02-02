// Syntax:
// elem.insertAdjacentHTML(whare,html);
//beforebegin
//afterbegin
//beforeend
//afterend

const todoList = document.querySelector(".todo-list");
let alist = "Hello freind";
//beforebegin  ---->it will add element before starting of selected ".todo-list" ul tag , means before <ul>
//it is same like before method
todoList.insertAdjacentHTML("beforebegin",`<ul class="todo-list"><li>before begining</li></ul>`);
todoList.insertAdjacentHTML("beforebegin",`<ul class="todo-list"><li>before begining1</li></ul>`);

//afterbegin---->it will add element after starting of selected ".todo-list" ul tag , means after <ul>
//it is same like prepend method
todoList.insertAdjacentHTML("afterbegin",`<li>after begining</li>`);
todoList.insertAdjacentHTML("afterbegin",`<li>after begining1</li>`);


// beforeend  ---> it will add element before ending of selected ".todo-list" ul tag , means before </ul>
//it is same like append method

// todoList.insertAdjacentHTML("beforeend",`<li>${alist}</li>`);
// todoList.insertAdjacentHTML("beforeend",`<li>Learn New Taday</li>`);
// todoList.insertAdjacentHTML("beforeend",`<li>html</li>`);
// todoList.insertAdjacentElement()

//afterend ---->it will add element after ending of selected ".todo-list" ul tag , means before <ul>
//it is same like after method
todoList.insertAdjacentHTML("afterend",`<ul class="todo-list"><li>before begining</li></ul>`);
todoList.insertAdjacentHTML("afterend",`<ul class="todo-list"><li>before begining1</li></ul>`);






