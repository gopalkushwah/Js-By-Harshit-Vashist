// clouser : when we declare any function inside function and return internal function , internal fuction returns with the laxical environment variable


// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();


// ==========================================================

// function myfunction(power){
//     return function(number){
//         return number ** power;
//         // console.log(number ** power);
//     }
// }
// const square = myfunction(2);
// const ans = square(8);
// console.log(ans);

// const cube = myfunction(3);
// const ans1 = cube(2);
// console.log(ans1);
// ==========================================================

function func(){
    let count = 0;
    return function(){
        if(count==0){
            console.log("Hi you called me");
            count++;
        }
        else
            console.log("I already called by you before ones");
    }
}
const myfunc = func();
myfunc();
myfunc();
const myfunc1 = func();
myfunc1();
myfunc1();

// ==========================================================