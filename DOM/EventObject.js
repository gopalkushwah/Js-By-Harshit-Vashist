// Event Object :  its an object which is provided by the browser when we perform any event like -- click , hover and etc.

// jab bhi hum kisi bhi element par event listner add karte hai 
// js engine line by line execute karta hai js code ko 
// browser has  -- js engine + extra features 
// browser has  -- js engine + webApis 


// jab broweser ko pata chala ki user ne event perform kia 
// jo hum listen kar rehe hai 
// browser do two tasks first :
// 1.  callback function in hai bo js engine ko dega 
// 2.callback function ke sath broweser jo event hua hai uski information bhi dega 

// ye information hame ek object ke form mai milegi jise hum "event object " kahte hai 
// ===========================================================================================

// const one = document.getElementById("id1");
// // console.log(one);
// one.addEventListener("click",function(){
//     console.log(this.textContent);
// });

// ===========================================================================================
// // get event object 
// const one = document.getElementById("id1");
// // console.log(one);
// one.addEventListener("click",function(eventObj){
//     // console.log(eventObj.target.textContent);
//     console.log(eventObj);
// });

// ===================================  IMPORTANT ========================================================
// ====================  currentTarget and target keys of event object ===================================
const allButton = document.querySelectorAll(".btn-container button");
for(let button of allButton){
    button.addEventListener("click",(event)=>{
        console.log(event.currentTarget);
        // console.log(event.target);
        // console.log(event.target.innerHTML);
        // console.log(event.currentTarget.textContent);
        // console.log(button.textContent);
    });
}