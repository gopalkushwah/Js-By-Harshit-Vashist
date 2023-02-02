// Object Destructuring 
// Creating an variable from the keys of abject to reffer the perticular key


// const obj = {
//     fruit : "mango",
//     price : 100,
//     color : "yellow"
// }
// before Destructuring
// console.log(obj.fruit);   //mango
// console.log(obj.color);   //yellow


// Destructuring 
// const fruit = obj.fruit;
// const color = obj.color;
// console.log(fruit);   //mango
// console.log(color);   //yellow

// shortcut for doing destructuring 
// const {fruit,color,price} = obj;
// console.log(fruit);   //mango
// console.log(color);   //yellow
// console.log(price);   //100

// ----------------------------------------------------------------------------------------
const obj = {
    fruit : "mango",
    price : 100,
    color : "yellow"
}

// const {fruit: var1 , color : var2 , price : var3} = obj;
// // console.log(fruit);  //error
// console.log(var1);  //ok
// // console.log(color);  //error
// console.log(var2);  //ok
// // console.log(price);   //error
// console.log(var3);   //ok


const {fruit , ...restVar} = obj;
console.log(fruit);  //mango
console.log(restVar);  //{price: 100, color: 'yellow'}








