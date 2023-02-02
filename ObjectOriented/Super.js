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
// console.log('---------------------------------------------------------');
class Dog extends Animal{
    // ṣpeed is new property so its must to create constructor of Dog class
    constructor(name,age,speed){
        super(name,age);
        this.speed =speed;
    }
    speedIs(){
        return `${this.name} is runnig at speed of ${this.speed}km/h`;
    }
}

const tommy = new Dog("Sheru",10,45);
const tommy1 = new Dog("molu",20,20);
console.log(tommy.speedIs());
console.log(tommy1.speedIs());