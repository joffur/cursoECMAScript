class User4 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}!`;
  }
  get #uAge() {
    return this.age
  }
  set #uAge(newAge) {
    this.age = newAge;
  }
};

const fercho = new User4('Fernando', 15);
console.log(fercho.uAge);
console.log(fercho.uAge = 20);
console.log(fercho.uAge);