// how to clone a element 

const ul = document.querySelector(".todo-list");
// console.log(ul);

const li = document.createElement(`li`);
// console.log(li);
li.textContent = `Learn js today`;
// // only one will work between append and prepend to remove this we use cloneNode() method
// ul.append(li);
// ul.prepend(li);
// // console.log(ul);


// const li1 = li.cloneNode();   //normal cloning it means only li tag will be cloned but content inside li will not be cloned

// if we wants to clone the content inside a tag we have to put the parameter as true ---->  cloneNode(true)   ---> it is know as deep cloning
const li1 = li.cloneNode(true); 
ul.append(li);
ul.prepend(li1);


