// appendChild
// insertBefore
// replaceChild
// removeChild


const ul = document.querySelector(".todo-list");
// console.log(ul);

const li = document.createElement(`li`);
// console.log(li);
li.textContent = `Learn js today`;

// -------------------------------------------------------------------------------

// // appendChild() ----> it add any tag as the child 
// ul.appendChild(li);

// -------------------------------------------------------------------------------

// // insertBefore(newNode, referenceNode) ----> it takes two perameters first element to append , and second is element which have to pull down
// const referenceNode = document.querySelector(".new-item");

// ul.insertBefore(li,referenceNode);  // it will add li before the element containce class ".new-item"

// -------------------------------------------------------------------------------

// // // replaceChild(newNode, referenceNode) ----> it takes two perameters first element to append , and second is element which have to replace
// const referenceNode = document.querySelector(".new-item");

// ul.replaceChild(li,referenceNode);  // it will replace li with the element containce class ".new-item"

// -------------------------------------------------------------------------------

// // replaceChild(nodeToremove) ----> it takes single perameters to remove 
const referenceNode = document.querySelector(".new-item");

// ul.removeChild(referenceNode);  // it will remove the element containce class ".new-item"
