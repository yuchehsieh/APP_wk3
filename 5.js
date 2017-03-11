//BIND
var person = {
  firstname:'Yu-Che',
  lastname:'Hsieh',
  getFullName: function(){
      var fullname = this.firstname + ' ' + this.lastnmae;
      return fullname;
  }
}

var logName = function() {
  console.log('logged: ' + this.getFullNmame());
}

var logPersonName = logName.bind(person);
logPersonName();

//BIND with CALLBACK
let greet = function(fn){
  fn();
};

let person = {
  name: 'Yu-Che',
  hello: function(){
    console.log(`Hello ${this.name}`);
  },
  sayHello: function(){
    greet(this.hello.bind(this));
  }
};

person.sayHello();


let greet = function(fn) {
  fn();
};

let newPerson = {
  name: 'Yu-Che',
  sayHello: function(){}
  greet(
    () => console.log(`Hello ${this.name}`)
  );
}
};

newPerson.sayHello();
