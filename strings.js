
// ======================Indexing of any string ====================

// indexing always starts from "0"  and end to "length - 1"
// G o p a l
// 0 1 2 3 4         0 to  5-1 => 4

// how to find length of any string 

// let myName = "Gopal Kushwah";
// console.log(myName);
// console.log(myName.length);
// console.log(myName[0]);  //First char of string
// console.log(myName[12]);  //Last char of string
// console.log(myName[myName.length-1]);  //Last char of string
// console.log(myName[myName.length-2]);  //Second-Last char of string


// ------------------------------JavaScript String Methods-------------------------
// --------------------------------------------------------------------------------
// trim()
// let myName = "      Gopal     ";

// // trim will remove all spaces, if only a word prasent in string 
// //before trim string 
// console.log(myName);
// console.log(myName.length);

// let trimMyName = myName.trim();

// //after trim the string will
// console.log(trimMyName);
// console.log(trimMyName.length);
//                                         //orignal=>------Gopal     kushwah
// myName = "      Gopal     kushwah";     //Output===>Gopal     kushwah
// trimMyName = myName.trim();
// console.log(trimMyName);
// console.log(trimMyName.length);

// --------------------------------------------------------------------------------
// // toUpperCase()    ===> to change case from lower to UPPER
// let firstName = "gopal kushwah"
// // before any changes string will
// console.log(firstName);
// //after doing uppercase
// console.log(firstName.toUpperCase());
// console.log(firstName.toLocaleUpperCase());

// --------------------------------------------------------------------------------
// toLowerCase()  ===> to change case from UPPER to lower
// let firstName = "GOPAL KUSHWAH"
// // before any changes string will
// console.log(firstName);
// //after doing lowercase
// console.log(firstName.toLowerCase());
// console.log(firstName.toLocaleLowerCase());

// --------------------------------------------------------------------------------
// slice(start index , end index+1)  
// => it will help to print the string from given starting index to given ending index

// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// G O P A L   K U S H W  A  H     i  s     a     g  o  o  d     b  o  y
// let firstName = "GOPAL KUSHWAH is a good boy";
// // // before any changes string will
// console.log(firstName);
// // //after doing slice
// firstName = firstName.slice(0,8);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.slice(0,27);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.slice(0,18);
// console.log(firstName);

// --------------------------------------------------------------------------------
// substring(start index, end index)  ==> same as slice
// less then 0 is equal to 0 
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// G O P A L   K U S H W  A  H     i  s     a     g  o  o  d     b  o  y
// let firstName = "GOPAL KUSHWAH is a good boy";
// // // // before any changes string will
// console.log(firstName);
// // // after doing substring
// firstName = firstName.substring(0,8);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.substring(0,27);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.substring(0,18);
// console.log(firstName);

// --------------------------------------------------------------------------------
// substr(start index, end index)  ==> same as slice
// substr(start index, end index)  ==> same as slice
// if we give index value in nagative format,then index will start from end of index 

// less then 0 is equal to 0 
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
// G O P A L   K U S H W  A  H     i  s     a     g  o  o  d     b  o  y
// let firstName = "GOPAL KUSHWAH is a good boy";
// // before any changes string will
// console.log(firstName);
// // after doing substring
// firstName = firstName.substr(-2);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.substr(-5);
// console.log(firstName);
// firstName = "GOPAL KUSHWAH is a good boy";
// firstName = firstName.substr(-8);
// console.log(firstName);


// --------------------------------------------------------------------------------
// replace()  ===> The replace() method replaces a specified value with another value in a string:

// let firstName = "Gopal kushwah is a good boy";
// before any changes string will
// console.log(firstName);
// // after doing replace
// firstName = firstName.replace("kushwah","jjfkjkj");
// console.log(firstName);
// firstName = firstName.replace("boy","player");
// console.log(firstName);
// Note
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// // The replace() method replaces only the first match(only a word)
// let firstName = "Gopal kushwah is a good boy good";
// firstName = firstName.replace("good","bad");
// console.log(firstName);

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// // By default, the replace() method is case sensitive. Writing GOOD (with upper-case) will not work.
// let firstName = "Gopal kushwah is a GOOD boy good";
// firstName = firstName.replace("good","bad");
// console.log(firstName);

// // To replace case insensitive, use a regular expression with an /i flag (insensitive)
// let firstName = "Gopal kushwah is a GOOD boy";
// firstName = firstName.replace(/GOOD/i,"bad");
// console.log(firstName);

// To replace all matches, use a regular expression with a /g flag (global match):
// let firstName = "Gopal kushwah is a good boy good";
// firstName = firstName.replace(/good/g,"bad");
// console.log(firstName);


// --------------------------------------------------------------------------------
// // concat()  ==> concat() joins two or more strings.
// // All string methods return a new string. They don't modify the original string.

// // Formally said:
// // Strings are immutable: Strings cannot be changed, only replaced.

// let firstName = "Gopal";
// console.log(firstName);

// let lastName = "kushwah";
// console.log(lastName);
// let fullName = firstName.concat(" ",lastName);
// console.log(fullName); 

// let but = " not working there work properly"
// let fullString = firstName.concat(" ",lastName ," is a good boy " ,but);
// console.log(fullString); 



// --------------------------------------------------------------------------------
// // padding = pad(range+1, char)
// range > str.length
// range shoul be greater than the length of the string 
// // padStart()  ==>The padStart() method pads a string with another string
// let text = "5";
// let padded = text.padStart(4,"X");
// console.log(padded);

// // Note
// // The padStart() method is a string method.
// // To pad a number, convert the number to a string first.
// // See the example below.
// let num = 54321;
// let str = num.toString();
// let padded = str.padStart(10,"X");
// console.log(padded);

// // important note points 
// // padStart() is not supported in Internet Explorer.


// --------------------------------------------------------------------------------
// padEnd()  ==> padEnd() is just like the padStart() method but it pads char at the end of the string

// --------------------------------------------------------------------------------
// // charAt(char index)  ==> spacific character at the given index 
// // 0 1 2 3 4 5 6 7 8 9 10 11 12
// // G o p a l   k u s h w  a  h
// let myName = "Gopal kushwah";
// let char = myName.charAt(2);  //p
// console.log(char);
// char = myName.charAt(6);  //p
// console.log(char);


// --------------------------------------------------------------------------------
// charCodeAt() ==> it will return the unicode of spacific char(256)
// // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
// // G o p a l   k u s h w  a  h     @
// let myName = "Gopal kushwah @";
// let char = myName.charCodeAt(2);  //p
// console.log(char);
// char = myName.charCodeAt(14);  //@ unicode is = 64
// console.log(char);
// char = myName.charCodeAt(13);  //space unocode is = 32
// console.log(char);

// // ECMAScript 5 (2009) allows property access [ ] on strings:
// // 0 1 2 3 4 5 6 7 8 9 10 11 12
// // G o p a l   k u s h w  a  h 
// let text = "Gopal kushwah";
// let char = text[3];
// console.log(char);

// --------------------------------------------------------------------------------
// split()  ==> A string can be converted to an array with the split() method.
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe

// // 0 1 2 3 4 5 6 7 8 9 10 11 12
// // G o p a l   k u s h w  a  h 
// let text = "Gopal kushwah";
// let char = text.split(" ");
// console.log(char);

// let text = "Gopal|kushwah|is|a|good|boy";
// let char = text.split("|");
// console.log(char);

// let text = "Gopal,kushwah,is,a,good,boy";
// let char = text.split(",");
// console.log(char);
// let text = "Gopal kushwah,is,a,good,boy";
// let char = text.split(",");
// console.log(char);
// let text = "Gopal,kus,hwah,is,a,good,boy";
// let char = text.split(",");
// console.log(char);