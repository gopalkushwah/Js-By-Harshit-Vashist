// find method returns only first occurence value 
//it is used to find a single value from a large number of value



const myArray = ["hello","cat","dog","lion","car"];
function isLength3(string){
    return string.length === 3;
}

myArray.find(isLength3);
console.log(myArray);
const ans = myArray.find(isLength3);
console.log(ans);


let users= [
    {firstName : "Gopal",age : 22,id:1},
    {firstName : "girraj",age : 20,id:2},
    {firstName : "ritik",age : 23,id:3},
    {firstName : "himanshu",age : 21,id:4}
]

const id = users.find(userId=>userId.id===3)
console.log(id);

