// class CreateUser{
//     constructor(firsName,lastName,email,age,address){
//         this.firsName = firsName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age ;
//         this.address = address ;
//     }
//     about(){
//         console.log(`About User :- \n\nName : ${this.firsName}\nAge : ${this.age} \nEmail : ${this.email}`);
//     };    
//     is18(){
//         return this.age>=18;
//     };
//     emailIs = function(){
//         console.log(`Email is ${this.email}`);
//     };

// }


// const user1 = new CreateUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
// const user2 = new CreateUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// user1.about();
// user2.about();


// ------------------------------------------------------
class Animal{
    constructor(name , age){
        this.name = name ;
        this.age = age;

    }
    eat(){
        return `${this.name} is eating `;
    }
    canEat(){
        if(this.age<=20){
            return `${this.name} can eat Bhusa and chara`;
        }
        else 
            return `${this.name} can eat Bhusa`;
    }
}

// const cow = new Animal("radha", 22);
// const bhesh = new Animal("pinki", 19);

// console.log('---------------------------------------------------------');
// console.log(cow);
// console.log(cow.eat());
// console.log(cow.canEat());

// console.log(bhesh.eat());
// console.log(bhesh.canEat());

class Dog extends Animal{
    isDog(){
        return true;
    }
    eat(){
        return `${this.name} can eat roti`;
    }
}

const tommy = new Dog("tommy",10);
console.log(tommy.eat());