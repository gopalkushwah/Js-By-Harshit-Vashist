let obj ={
    key1 : "value1",
    key2 : "value2"
}

// let obj1 = obj;
// console.log(obj);
// console.log(obj1);
// obj.key3 = "value3";
// console.log(obj1);

// let obj1 = {...obj};
// // console.log(obj);
// // console.log(obj1);
// obj.key3 = "value3";
// obj.key4 = "value4";
// console.log(obj);
// console.log(obj1);

let obj1 = Object.assign({},obj);
// console.log(obj);
// console.log(obj1);
obj.key3 = "value3";
obj.key4 = "value4";
console.log(obj);
console.log(obj1);





