function Student (name = '', gendor = 'M', age = 18) {
  this.name = name;
  this.gendor = gendor
  this.age = age;

  this.sayHello = () => {
    console.log(`my name is ${this.name}, ${age} years old, i'm a ${gendor}`)
  }
}

function _new (...params) {
  let [constructor, ...args] = params;
  if (typeof constructor !== 'function') {
    throw new Error('Type Error')
  }
  // 创建空对象
  let target = {};
  // 将原型指向构造函数
  target.__proto__ = constructor.prototype
  // 可以将1，2步合并
  // let target = Object.create(constructor.prototype)
  // 改变构造函数this指向target
  let result = constructor.apply(target, args)

  if (result && (typeof result === 'object' || typeof result === 'function' )) {
    return result
  }

  return target
}

let jack = _new(Student, 'jack', 'M', 20)
jack.sayHello()
let jenny = _new(Student, 'jenny', 'F', 18)
jenny.sayHello()

console.log(jack instanceof Student)
console.log(jack.hasOwnProperty('name'))
console.log(jack.hasOwnProperty('age'))
console.log(jack.hasOwnProperty('sayHello'))