
// // ----------------boolean ---------------
// // Boolean returns true or false 
// let num1=10;
// let num2=11;
// console.log(num1>num2); //false
// console.log(num1<num2); //true 
// console.log(typeof(num1<num2)); //boolean 

// --------------Comarision operator --------
// < , > , <= , >= , != , !== , == , === 

// let num1=10;
// let num2=11;
// console.log(num1>num2); //false
// console.log(num1>=num2);//false
// console.log(num1<num2); //true
// console.log(num1<=num2); //true
// console.log(num1==num2); //false
// console.log(num1===num2); //false

// num1=10; num2=10;
// console.log(num1==num2); //true
// console.log(num1===num2); //true

// //if one value is string in this comparision

// let num1=10;
// let num2="10";
// console.log(num1>num2); //false
// console.log(num1>=num2);//true
// console.log(num1<num2); //false
// console.log(num1<=num2); //true
// console.log(num1==num2); //true --> it will not check the type of value
// console.log(num1===num2); //false --> it will check the type of value

// num1=10; num2=10;
// console.log(num1==num2); //true
// console.log(num1===num2); //true

// // ------------ == vs === -----------------
// // == --> it will not check the type of variable , it will check only the value 
// let num1 = 10;
// let num2 = "10";
// console.log(num1==num2);  // 10 == 10  
//                           // value == value ---> true
// num1 = 10;
// num2 = "11";
// console.log(num1==num2);  // 10 == 11   ---> false

// // === --> it will check the type of variable , it don not matter that what is the value 
// console.log(num1===num2); // Number === string (not equal) so answer is false 


// // ------------ != vs !== -----------------
// // != --> it will not check the type of variable , it will check only the value 
// let num1 = 10;
// let num2 = "11";
// console.log(num1!=num2);  // 10 != 11  
//                           // value == value ---> true
// num1 = 10;
// num2 = "10";
// console.log(num1!=num2);  // 10 != 10   ---> false

// // // === --> it will check the type of variable , it don not matter that what is the value 
// num1 = 10;
// num2 = "11";
// console.log(num1!==num2); // Number !== string (not equal) so answer is true 
// num1 = 10;
// num2 = 10;
// console.log(num1!==num2); // Number !== Number (equal) so answer is false 


