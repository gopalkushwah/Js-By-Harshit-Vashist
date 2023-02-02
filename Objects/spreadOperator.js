// Spread Operator  in the case of ARRAY 
// Spreading it means ittreting on all values and adding provided values in new or given new array or object 
let arr1 = [1,2,3];
let arr2 = [5,6,7];

// let arr3 = [...arr1,...arr2]     // output : [1, 2, 3, 5, 6, 7]
// console.log(arr3);

// We can also spread on the string value to get each character of the given values 
// let arr3 = [..."Gopal kushwah"]     // Output : ['G', 'o', 'p', 'a', 'l', ' ', 'k', 'u', 's', 'h', 'w', 'a', 'h']
// console.log(arr3);


// //we can not spread on the number because numbers are not iterable
// let arr3 = [...1234568789]     //ERROR : 1234568789 is not iterable
// console.log(arr3);

// ------------------------------------------------------------------------------------------------------
// Spread Operator  in the case of OBJECT  
// const obj1 = {
//     name : "gopal",
//     mo : 7974070349
// }

// const obj2 = {
//     cast  : "Kushwah",
//     dist : "Sehore"
// }

// const newObj = {...obj1,...obj2}
// console.log(newObj);   // OUTPUT : {name: 'gopal', mo: 7974070349, cast: 'Kushwah', dist: 'Sehore'}

//------------------------------------------------------------------------------------------------------
// if key are same in same object or other object for example {"name "} is same in both obj1 and obj2 then last key will override on obj1's key 
// const obj1 = {
    //     name : "gopal",
    //     mo : 7974070349
// }
    
// const obj2 = {
//     name : "girraj",
//     cast  : "Kushwah",
//     dist : "Sehore"
// }
// //girraj is overrided on the first value of name : gopal 
// const newObj = {...obj1,...obj2}
// console.log(newObj);   // OUTPUT : {name: 'girraj', mo: 7974070349, cast: 'Kushwah', dist: 'Sehore'}
               
//------------------------------------------------------------------------------------------------------

// How to spread string in object 
// const newObj = {..."abc"};
// console.log(newObj);   //{0: 'a', 1: 'b', 2: 'c'}

// converting array as object 
// const newObj = {...["item1","item2"]};

// console.log(newObj);   //{0: 'item1', 1: 'item2'}

// const newObj = {..."abcdefghijklmnopqrstuvwxyz"};

// console.log(newObj);
// console.log(newObj[6]+""+newObj[14]+""+newObj[15]+""+newObj[0]+""+newObj[11]);

