// get and set attribute using Js 
// const link = document.querySelector("li.nav-item a").getAttribute("href");


const link = document.querySelector("li.nav-item a");
console.log(link.getAttribute("href"));


link.setAttribute("href","#about");
console.log(link.getAttribute("href"));
console.log(link.getAttribute("href").slice(1));


// const mainHeadingSpan = document.querySelector("#main-heading span");
// console.log(mainHeadingSpan.getAttribute("style"));
// mainHeadingSpan.setAttribute("style","display:inline")
// console.log(mainHeadingSpan.getAttribute("style"));
