// Antes de ES6
function newUser(name, age, country) {
  var name = name || 'Jose';
  var age = age || 34;
  var country = country || 'CO';
  console.log({name, age, country});
}

newUser();
newUser('Fernando', 15, 'MX');

// Default params
function newAdmin(name = 'Jose', age = 18, country = 'CO') {
  console.log({name, age, country});
}

newAdmin();
newAdmin('Angie', 26, 'PE');

function newAdmin({
  name = 'Andrew', 
  age = 18, 
  country,
} = {}) {
  console.log({name, age, country});
}

newAdmin();
newAdmin({
  name: 'Angie',
  country: 'PE'
});