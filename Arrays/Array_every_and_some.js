let arr =  [12,42,18,3,6,14,20];
let check = arr.some(myfun);
console.log(check);
function myfun(arr){return arr>=18};