var lastName = 'Jose';
lastName = 'Fernando';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);


const fruits = () => {
  if (true) {
    var fruit1 = 'Apple';     // function scope
    let fruit2 = 'Kiwi';      // block scope
    const fruit3 = 'Banana';  // block scope
  }
  console.log({fruit1, fruit2, fruit3});
}

fruits();