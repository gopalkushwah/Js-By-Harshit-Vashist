// every Method: 
//     * it return only true and false
//     * it take a function as a arrgument , this function must have to return the boolean value (true/false)

// const numbers = [2,4,6,8,10];
// const isEven = numbers.every((num)=>{
//     return num%2===0;
// })

// console.log(isEven);   // true

// const numbers = [2,4,6,1,8,10];
// const isEven = numbers.every((num)=>{
//     return num%2===0;
// })

// console.log(isEven);  //false

let userCart = [
    {productId : 1,productName : "mobile", price : 12000},
    {productId : 2,productName : "laptop", price : 34000},
    {productId : 3,productName : "tv", price : 15000},
    {productId : 3,productName : "remote", price : 500},
    {productId : 3,productName : "tablet", price : 20000},
    {productId : 3,productName : "ear Phone", price : 1350}
]


// const result = userCart.every((pr)=>{
//     return pr.price<=50000;
// })

// console.log(result);  // true

const result = userCart.every((pr)=>{
    return pr.price<=30000;
})

console.log(result);  // false