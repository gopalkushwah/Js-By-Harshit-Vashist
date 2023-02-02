const body = document.body;
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
// console.log(button);
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    body.style.background = `rgb(${red},${green},${blue})`;
    h1.innerHTML = body.style.background;
},1000);
button.addEventListener("click",()=>{
    clearInterval(intervalId);
    button.innerHTML = body.style.background;
})
console.log(intervalId);