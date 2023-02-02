const allButton = document.querySelectorAll(".btn-container button");
// console.log(allButton);

// allButton[0].addEventListener("click",function(){
//     console.log(this.textContent);
// });

// allButton[1].addEventListener("click",function(){
//     console.log(this.textContent);
// });
// // const p = document.querySelector(".pera");
// const p = document.getElementsByClassName("pera");
// // const p = document.getElementById("peraid");
// // const p = document.getElementsByTagName("p");
// // console.log(p[0].innerHTML);
// // console.log(p);
// allButton[2].addEventListener("click",function(){
//     console.log(p[0].textContent);
// });
// ===========================================================================================================
// for(let button of allButton){
//     button.addEventListener("click",function(){
//         console.log(button.textContent);
//     });
// }
// ===========================================================================================================

// for(let i = 0;i<allButton.length;i++){
//     allButton[i].addEventListener("click",function(){
//         console.log(this.textContent);

//     })
// }
// ===========================================================================================================

allButton.forEach((button)=>{
    button.addEventListener("click",function(){
        // console.log(button.textContent);
        console.log(button.textContent);
        // const newPera = document.getElementById("newpera").innerHTML = this.textContent;

    })
})