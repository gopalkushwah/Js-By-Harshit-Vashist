// Maps 

// map is iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate key are not allowed (like object)

// set method is used to set values in maps 
// get method is used to fetch the values from maps 


// Differance between maps and objects

// objects can only have string or symbol as key

// in maps you can use anthing as key (like array , number string)

// -------------------------------------------------------------------

// object literal 
// key -> String
// key -> Symbol

// let person = {
//     firstName : "Gopal",
//     age : 22,
//     1 : "one"     //here 1 is string
// }

// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person[1]);

// for(let key in person){
//     console.log(key," ",person[key]); 
// }

// for(let key in person){
//     console.log(typeof key);  //string
// }
// -------------------------------------------------------------------

// key value pair 
// const person = new Map();
// console.log(person); //Map(0) {size: 0}
// person.set('key','value');    
// person.set('firstName','Gopal');
// person.set('lastName','Kushwah');
// person.set('age',22);
// person.set('cast','OBC');
// person.set(1,3);
// person.set(2,3);
// person.set([1,2,3],'onetwothree');
// person.set([1,2,3],'onetwothree');
// person.set({1:"one"},'one');

// console.log(person);  //Map(6) {'key' => 'value', 'firstName' => 'Gopal', 'lastName' => 'Kushwah', 'age' => 22, 'cast' => 'OBC',1 => "one"}
// console.log(person.get('firstName')+" "+person.get('lastName'));
// console.log(person.get(1)+person.get(2));

// for(let key of person.keys()){
//     console.log(person.get(key) );
// }

// console.log("\n");
// for(let key of person.keys()){
//     console.log(key,' : ', typeof key );
// }

//it will give us the whole key value pair 
// for(let key of person){
//     console.log(key);
//     // console.log(Array.isArray(key));
// }


// for(let [key,value] of person){
//     console.log(key,value);
//     // console.log(Array.isArray(key));  //true
// }

// ______________________________________________________
// const person = new Map([['firstName','Gopal'],['Age',22],['balance',23313133]]);

// console.log(person);  //{'firstName' => 'Gopal', 'Age' => 22, 'balance' => 23313133}
// ______________________________________________________

// we can use map to store the extra data in any object without storing in actual object 

const person1 = {
    id : 1,
    firsrName : "Gopal"
}

const person2 = {
    id : 2,
    firsrName : "girraj"
}

console.log(person1.id);
const extraInfo = new Map();
extraInfo.set(person1,{age : 22, gender : "Male", class : 12});
extraInfo.set(person2,{age : 21, gender : "Male", class : 13});
// console.log(extraInfo);
console.log(extraInfo.get(person1).age);   //8
console.log(extraInfo.get(person1).gender);   //8
console.log(extraInfo.get(person1).class);   //8
console.log("\n");   //8/

console.log(person2.id);
console.log(extraInfo.get(person2).age);   //8
console.log(extraInfo.get(person2).gender);   //8
console.log(extraInfo.get(person2).class);   //8







