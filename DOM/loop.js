// let navItems = document.getElementsByTagName("a");   //it will return HtmlCollection
// console.log(navItems);
// console.log(navItems[0]);
// console.log(navItems[0].textContent);
// console.log(navItems[0].innerText);


// const navItems = document.getElementsByClassName("nav-item");   //it will return HtmlCollection
// const navItems = document.getElementsByTagName("a");   //it will return HtmlCollection
// console.log(navItems);


// simple loop  - it will work on HTMLCollection and NodeList
// for of loop  - it will work on HTMLCollection and NodeList
// foreach method  - it will not work on HTMLCollection we have to convert them in array

// ===========================================================
// // for(let i = 0;i<navItems.length;i++){
// //     navItems[i].style.backgroundColor = `white`;
// //     navItems[i].style.color = `#203040`;
// //     navItems[i].style.padding = `.8rem 1.5rem`;
// //     navItems[i].style.borderRadius = `.5rem`;
// //     // navItems[i].style.padding = `.8rem`;
// // }

// ===========================================================
// // for(let navItem of navItems){
    // //     navItem.style.backgroundColor = `white`;
// //     navItem.style.color = `#203040`;
// //     navItem.style.padding = `.8rem 1.5rem`;
// //     navItem.style.borderRadius = `.5rem`;

// // }

// // ---------------------------------------------------------------------------------------
// let navItems = document.getElementsByTagName("a");   //it will return HtmlCollection
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));   //true
// // let i = 0;
// navItems.forEach(navItem => {
//     // console.log(navItems[i].textContent);   
//     navItem.style.backgroundColor = `white`;
//     navItem.style.color = `#203040`;
//     navItem.style.padding = `.8rem 1.5rem`;
//     navItem.style.borderRadius = `.5rem`;
//     // i++;
// });


// --------------------------------------------------------------------------------------------------

// NodeList - it is not array its array like object in js
// we can convert NodeList into array by using from method 

let navItems = document.querySelectorAll("a");   //it will return HtmlCollection
// console.log(navItems);
// for(let i = 0;i<navItems.length;i++){
//     navItems[i].style.backgroundColor = `white`;
//     navItems[i].style.color = `#203040`;
//     navItems[i].style.padding = `.8rem 1.5rem`;
//     navItems[i].style.borderRadius = `.5rem`;
//     // navItems[i].style.padding = `.8rem`;
// }

// ===========================================================
// for(let navItem of navItems){
//     navItem.style.backgroundColor = `white`;
//     navItem.style.color = `#203040`;
//     navItem.style.padding = `.8rem 1.5rem`;
//     navItem.style.borderRadius = `.5rem`;
// }
// let i = 0;
// ===========================================================
// console.log(Array.isArray(navItems));//false
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems)); //true
// navItems.forEach(navItem => {
//     // console.log(navItems[i]);   
//     navItem.style.backgroundColor = `white`;
//     navItem.style.color = `#203040`;
//     navItem.style.padding = `.5rem 1.5rem`;
//     navItem.style.borderRadius = `.5rem`;
//     // i++;
// });