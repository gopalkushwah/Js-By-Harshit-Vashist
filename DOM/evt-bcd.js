const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// // ==================== event bubbling ====================
// // when we create nested element 
// // and add some eventlistener to them 
// // and click on any element, other event get called autometicly it is known as event bubbling or prapogation


// // when i click on the child box output on console will be
// // you click on child
// // you click on parent
// // you click on gp parent
// // you click on document.body

// // when i click on the parent box output on console will be
// // you click on parent
// // you click on gp parent
// // you click on document.body

// grandparent.addEventListener("click",()=>{
//     console.log("you click on gp parent");
//     // alert("you clicke on gp parent")
// })

// parent.addEventListener("click",()=>{
//     console.log("you click on parent");
//     // alert("you clicke on parent")
// })

// child.addEventListener("click",()=>{
//     console.log("you click on child");
//     // alert("you clicke on child")
// })

// document.body.addEventListener("click",()=>{
//     console.log("you click on document.body");
//     // alert("you clicke on document.body")
// })

// // =====================================================================================================================
// // ==================== event capturing ====================
// // to do event capturing we have to set the third argument of eventListener as **true**

// // when we create nested element 
// // and add some eventlistener to them 
// // and click on any element, other event get called autometicly it is known as event capturing


// // when i click on the child box output on console will be
// // captured !!!! document.body
// // captured !!!! gp parent
// // captured !!!! parent
// // captured !!!! child


// // when i click on the parent box output on console will be
// // captured !!!! document.body
// // captured !!!! gp parent
// // captured !!!! parent

// grandparent.addEventListener("click",()=>{
//     console.log("captured !!!! gp parent");
//     // alert("you clicke on gp parent")
// },true)

// parent.addEventListener("click",()=>{
//     console.log("captured !!!! parent");
//     // alert("you clicke on parent")
// },true)

// child.addEventListener("click",()=>{
//     console.log("captured !!!! child");
//     // alert("you clicke on child")
// },true)

// document.body.addEventListener("click",()=>{
//     console.log("captured !!!! document.body");
//     // alert("you clicke on document.body")
// },true)

// =====================================================================================================================
// ==================== event delegation ====================

grandparent.addEventListener("click",(eventObj)=>{
    console.log(eventObj.target);
    // console.log(eventObj.target.innerText);
    // console.log(eventObj.target.textContent);
    // alert("you clicke on gp parent")
})
