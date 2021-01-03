let isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}

// console.log(isType('String')('fdfd'))


function add (a) {
  function sum (b) {
    a = a + b
    return sum
  }
  sum.toString = function() {
      return a
  }
  return sum
}
console.log(add(1)(2))