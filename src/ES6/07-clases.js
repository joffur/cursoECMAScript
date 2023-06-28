/* 
Declarando una clase
class User {};

Instanciado una clase
const newUser = new User(); 
*/

// metodos

class User {
  greeting() {
    return 'Hello';
  }
};

const joffur = new User();
console.log(joffur.greeting());
const bebeloper = new User();
console.log(bebeloper.greeting());

// constructor

class User2 {
  constructor() {
    console.log('Nuevo usuario');
  }
  greeting() {
    return 'Hello';
  }
};

const jose = new User2();

// this

class User3 {
  constructor(name){
    this.name = name;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}!`;
  }
};

const angie = new User3('Angie');
console.log(angie.greeting());

// setters and getters

class User4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}!`;
  }
  get uAge() {
    return this.age
  }
  set uAge(newAge) {
    this.age = newAge;
  }
};

const fercho = new User4('Fernando', 15);
console.log(fercho.uAge);
console.log(fercho.uAge = 20);
console.log(fercho.uAge);