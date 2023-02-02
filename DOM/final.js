const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();  // it will help to prevent the reloading of page when we press the add button or enter key in form
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHTML = `<span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;

    newLi.innerHTML = newLiInnerHTML;

    todoList.append(newLi);
    todoInput.value = "";
});

todoList.addEventListener("click",(e)=>{
    // console.log(e.target.classList);
    if(e.target.classList.contains("done")){
        // console.log("great!!!");
        const liSpan = e.target.parentNode.previousElementSibling;
        // console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    };
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something");
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    };
})