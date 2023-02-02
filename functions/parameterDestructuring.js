//object

const person = {
    firstName : "Gopal",
    gender : "Male",
    age : 22
} 

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }
// printDetails(person);


// *********destructuring**********************
function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);