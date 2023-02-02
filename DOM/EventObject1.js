console.log("Script start here !!!!!!");

const allButton = document.querySelectorAll(".btn-container button");
// console.log(allButton);
allButton.forEach((button)=>{
    button.addEventListener("click",(eventObj)=>{
        let num = 0;
        for(let i = 0;i<1000000000;i++,num+=i);  // to delay the clicks
        // console.log(eventObj.currentTarget.textContent+"\t"+num);
        console.log(eventObj.currentTarget.textContent);
    })
})
let num1 = 0;
for(let i = 0;i<=100000000;i++,num1+=i);
console.log("Value of num1 "+num1);


console.log("Script end here !!!!!!");
