//if a single value setisfy the condition then it will return true otherwise false

const numbers = [9,3,5,2,15];
const isEven = numbers.some((num)=>{
    return num%2===0;
})

console.log(isEven);   // true

let userCart = [
    {productId : 1,productName : "mobile", price : 12000},
    {productId : 2,productName : "laptop", price : 34000},
    {productId : 3,productName : "tv", price : 15000},
    {productId : 3,productName : "remote", price : 500},
    {productId : 3,productName : "tablet", price : 20000},
    {productId : 3,productName : "ear Phone", price : 1350}
]


const result = userCart.some((pr)=>{
    return pr.price<=10000;
})

console.log(result);  // true