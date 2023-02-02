const sectionTodo = document.querySelector(".section-todo");

// toggle:
// if class present on an element it will remove the given class 
// if class is not present on an element it will add the given class 
sectionTodo.classList.toggle("bg-dark");  //add =====> "bg-dark"
sectionTodo.classList.toggle("bg-dark");  //remove =====> "bg-dark"
sectionTodo.classList.toggle("bg-dark");  //add =====> "bg-dark"
// // console.log(sectionTodo.classList);
// function myfunction(){
//     sectionTodo.classList.add("bg-dark");
// }

const formIn = document.getElementById("form-in");
// let ans = formIn.classList.contains("btn1");  //true
// console.log(ans);
// ans = formIn.classList.contains("btn");
// console.log(ans);
// ans = formIn.classList.contains("btn-heading");
// console.log(ans);

// console.log(formIn);
function formInput(){
    formIn.classList.add("bg-change");
    formIn.classList.toggle("btn1");
    // formIn.classList.remove("btn1");
}
function formInput1(){
    formIn.classList.add("btn1");
    formIn.classList.remove("bg-change");
}
