// enhanced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId,
  }
}

console.log(newUser('JoFFuR', 35, 'CO', 1));