const rootNode = document.getRootNode();
// console.log(rootNode);  //document object is the root node of js
// console.log(rootNode.childNodes);  //NodeList [html] -- html is the only one child of this root node
const htmlElementNode = rootNode.childNodes[0];
// =================================================================
// console.log(htmlElementNode); // whole html tag with content
// console.log(htmlElementNode.childNodes);  //NodeList(3) [ head, text, body]
// console.log(htmlElementNode.childNodes[0]);  
// console.log(htmlElementNode.childNodes[1]);  
// console.log(htmlElementNode.childNodes[2]);  
// // =================================================================
// const headElelementNode = htmlElementNode.childNodes[0];
// const textNode1 = htmlElementNode.childNodes[1];
// const bodyElelementNode = htmlElementNode.childNodes[2];
// console.log(headElelementNode);  
// console.log(textNode1);  
// console.log(bodyElelementNode);  

// console.log(headElelementNode.childNodes);    //NodeList(5) [text, title, text, script, text]
// // =================================================================
// console.log(headElelementNode.parentNode);    //NodeList(1) [html]


// ===============================================================================================
// sibling relationship 

const headElelementNode = htmlElementNode.childNodes[0];
// console.log(headElelementNode.nextSibling);  //text
// console.log(headElelementNode.nextSibling.nextSibling);  //body
// console.log(headElelementNode.nextSibling.previousSibling);  //body


// important 
// console.log(headElelementNode.nextElementSibling);  //body

// ===============================================================================================

// const heading = document.querySelector(".heading");
// // console.log(heading.parentNode);
// heading.parentNode.style.backgroundColor = "red";
// heading.parentNode.style.color = "white";
// const div = heading.parentNode.parentNode;
// div.style.margin = "20px";
// div.style.width = "500px";
// div.style.height = "500px";
// div.style.padding = "20px";
// div.style.boxSizing = "border-box";
// div.style.backgroundColor = "#333";

// we can select body and head directly 
// const body = document.body;
// console.log(body);
// const head = document.head;
// console.log(head);

// ===============================================================================================
let head = document.querySelector("head");
console.log(head);
console.log(head.children[0]);
console.log(head.children[1]);
const title = head.querySelector("title");
console.log(title);
console.log(title.childNodes);






