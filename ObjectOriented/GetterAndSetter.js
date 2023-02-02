// ------------------------------------------------------
// class Student{
//     constructor(name , age,marks){
//         this.name = name ;
//         this.age = age;
//         this.marks = marks;
//     }
//     // // normal 
//     // fullDetail(){
//     //     return `${this.name} ${this.age} ${this.marks}`;
//     // }

//     // getter
//     // get fullDetail(){
//     //     return `${this.name} ${this.age} ${this.marks}`;
//     // }
// }

// const student1 = new Student("Gopal",22,60);
// console.log(student1.name);

// normal 
// console.log(student1.fullDetail());  

// getter 
// console.log(student1.fullDetail());  //error  student1.fullDetail is not a function
// console.log(student1.fullDetail);  //ok


// ------------------------------------------------------------
// Setter 
class Student{
    constructor(name , age,marks){
        this.name = name ;
        this.age = age;
        this.marks = marks;
    }
    // getter
    get fullDetail(){
        return `${this.name} ${this.age} ${this.marks}`;
    }

    // normal
    // setDetail(name,age,marks){
    //     this.name=name;
    //     this.age= age;
    //     this.marks = marks;
    // }

    // setter
    set setDetail(Detail){
        const [name,age,marks] = Detail.split(",");
        this.name=name;
        this.age= age;
        this.marks = marks;
    }
}

const student1 = new Student("Gopal",22,60);
console.log(student1.fullDetail);
// console.log(student1.name);
// console.log(student1.age);

// normal 
// student1.setDetail("Girraj",20,99);
// console.log(student1.fullDetail);

// setter 
student1.setDetail="Girraj kushwah,20,99";
student1.setDetail="Girraj kushwah,20,99";
console.log(student1.fullDetail);
