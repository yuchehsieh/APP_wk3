//Function constructor
'use strict'
class Person{
    constructor(name){
        this.name = name;
    }
    printGreeting(){
        console.log(`Hi, I am ${this.name}`);
    }
}

var person1 = new Person('Andrew');
person1.printGreeting();
var person2 = new Person('Mike');
person2.printGreeting();


//EXTENDS
class Employee extends Person{
    constructor(name,job){
        super(name);
        this.job = job;
    }
    printGreeting(){
        super.printGreeting();
        console.log(`Hi, I am ${this.name} and I am a ${this.job}!`);
    }
}

var person3 = new Employee('Andrew','Teacher');
person3.printGreeting();
var person4 = new Person('Mike');
person4.printGreeting();


//PROTOTYPE
Person.prototype.printGreeting = function(){
    console.log(`Hi, I am ${this.name}, and I have been changed!`);
}
person3.printGreeting();
person4.printGreeting();
