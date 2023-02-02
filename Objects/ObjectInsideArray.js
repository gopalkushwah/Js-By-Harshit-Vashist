//Objects inside arrray 
//its very usefull in real life application 

const arr = [
    {userId : 1, userName : "Gopal" , Gender : "male"},
    {userId : 2, userName : "Girraj" , Gender : "male"},
    {userId : 3, userName : "Himanshu" , Gender : "male"},
    {userId : 4, userName : "Rashi" , Gender : "female"}
]

// console.log(arr[0].userName);  //Gopal

// we can use any loop to iterate the array 
// for of loop
// for (let user of arr){
//     // console.log(user);
//     console.log("User Name : ",user.userName);
// }

//nested Destructuring 

// const [user1,,user3] = arr;
// console.log(user1);
// console.log(user3);


const [{userName:user1name,userId : user1id},{userName: user2name,userId : user2id},{},{userName:user3name,userId:user3id}] = arr;
console.log(user1name);
console.log(user1id);

