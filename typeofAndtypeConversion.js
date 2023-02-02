// ------------------------Type Of -------------------
// ----------------Origional age ---------------------
// let age = 22;
// console.log(typeof age); //number
// -----------------Number to string conversion ------
// trick
// age = age + "";
// // console.log(typeof (age + "")); //string
// console.log(typeof age); //string

// predefine string() function
// age = String(age);
// console.log(typeof (String(age)));
// console.log(typeof age);

// ----------------Origional name --------------------
// let firstName = "Gopal";
// console.log(typeof firstName); //string

// --------------String to Number conversion----------
// trick
// firstName = +"gopal";
// // console.log(typeof +"gopal"); //Number
// console.log(typeof firstName); //Number
// console.log(firstName); //NaN

// predefine function for string to number conversion 
// firstName = Number("56");
// // console.log(firstName);
// // console.log(typeof firstName); //number
// console.log(typeof (Number("56"))); //number


// ---------------Concatenation str1+str2--------------
// // let firstName = "Gopal";
// // let lastName = "Kushwah";
// // let fullName = firstName + " " + lastName;
// // console.log(fullName);

// // let firstStr = "17";
// // let lastStr = "10";
// // let fullStr = firstStr + lastStr;
// // console.log(fullStr); // 1710--->string
// // console.log(typeof fullStr); //string
// --------------------------------------------------------
// let firstStr = "17";
// let lastStr = "10";
// string to number  
// trick
// let fullStr = +firstStr + +lastStr;

// console.log(fullStr); // 1710--->27---->number
// console.log(typeof fullStr); //number
// --------------------------------------------------------
// let firstStr = "17";
// let lastStr = "10";
// predefine number() function
// let fullStr = Number(firstStr + lastStr);

// console.log(fullStr); // 1710--->27---->number
// console.log(typeof fullStr); //number

// ---------------------------------Tamplate string ------------------------
// output----> my name is Gopal kushwah and my age is 21
// ------traditional way ---------------
// let age = 21;
// let myName = "Gopal Kushwah";
// let aboutMe = "My name is " + myName + " and my age is " + age;
// console.log(aboutMe);
// // console.log(typeof aboutMe); //string

// by using tamplate string 
// let age = 21;
// let myName = "Gopal Kushwah";
// let aboutMe = `my name is ${myName} and my age is ${age}`;
// console.log(aboutMe);
// console.log(typeof aboutMe); //string 

