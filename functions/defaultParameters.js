// function addTwo(a,b){
//   return a+b;
// }
// if we forgot to pass any parameter or we dont want to pass any parrameter this function will return "NaN" because it js sets the value of empty parameter as "UNDEFINED"
// to remove this kind of problom we set the parameter value as per requirment  
// console.log(addTwo(4));


// // ************* old way *****************
// function addThree(a,b,c){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     if(typeof c === "undefined"){
//         c = 0;
//     }
//     return a+b+c;
// }
// console.log(addThree(4));

// ************* new way *****************
function addThree(a=0,b=0,c=0){
    return a+b+c;
}
console.log(addThree(4,5));

// ************* new way *****************
function mulThree(a=1,b=1,c=1){
    return a*b*c;
}
console.log(mulThree(4,5));
