// prototype
function Person (name, sex) {
  this.name = name;
  this.sex = sex;
}

function Man (name, sex) {
  this.name = name
}

Man.prototype = new Person('', 'male');

let jack = new Man('jack')

console.log(jack)

