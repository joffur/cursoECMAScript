const user = {
  name: 'joffur',
  age: 35,
  country: 'CO'
};
const { username, ...values } = user;
console.log({username, values});