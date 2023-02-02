let arr = [
    {
        name : "gopal kushwah",
        age : 22
    },
    {
        name : "girraj kushwah",
        age : 20
    },
    {
        name : "himashu",
        age : 21
    },
    {
        name : "anish",
        age : 22
    },
    {
        name : "krishna",
        age : 20
    },
    {
        name : "dilip kushwah",
        age : 23
    },
    {
        name : "chhotu",
        age : 25
    }
];

// const ul = document.querySelector(".items-ul");
// let items = [arr.length];
// console.log(items);
// for(let i = 0;i<arr.length;i++){
//     items[i]= document.createElement("li");
//     items[i].innerHTML = `Name : ${arr[i].name} and Age : ${arr[i].age}`;
//     ul.append(items[i]);
// }

const ul = document.querySelector(".items-ul");
let items;
// console.log(items);
// for(let i = 0;i<arr.length;i++){
//     items= document.createElement("li");
//     items.classList.add("li-items");
//     items.innerHTML = `${items.id = `items`+(i+1)} `
//     console.log(items);
//     items.innerHTML = `Name : ${arr[i].name} and Age : ${arr[i].age}`;
//     ul.append(items);
// }

let i = 0;
arr.forEach((obj)=>{
    items= document.createElement("li");
    items.classList.add("li-items");
    items.innerHTML = `${items.id = `items`+(i+1)} `
    console.log(items);
    items.innerHTML = `Name : ${obj.name} and Age : ${obj.age}`;
    ul.append(items);
 
});