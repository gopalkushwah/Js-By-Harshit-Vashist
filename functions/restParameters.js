// function func (a,b,c){
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// }

// func(10,20,30,40,50,60,70);

// OUTPUT : 
// a = 10
// b = 20
// c = 30

//************************************************************ */
// function func (a,b,...c){
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);   // OUTPUT : 30,40,50,60,70   //it means its array of rest values which is passed from the function call
//     // console.log(`c = `,c);     // OUTPUT : [30, 40, 50, 60, 70]
// }

// func(10,20,30,40,50,60,70);

//************************************************************ */

function sum (...numbers){
    let total = 0;
    for(let number of numbers){
        total+=number;
    }
    return total;
}
console.log(sum(10,20,30,40));


