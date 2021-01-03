/**
 * 组合继承
 * 关键：
 *    1. 通过调用父构造函数，继承父类属性并保留传参
 *    2. 通过Object.create(Parent.Prototype)来继承父类的原型属性
 * 优点：
 *    1. 创建子类实例，可以向父类传参
 *    2. 可以实现多继承
 *    3. 解决原型链继承中子类实例共享父类引用类型属性问题
 *    4. 父类构造函数只执行一次
 */

function Parent (sex) {
  console.log('Parent')
  this.sex = sex
  this.favoriteGames = []
}

Parent.prototype.setSex = function (sex) {
  this.sex = sex
}
Parent.prototype.printSex = function () {
  console.log(this.sex)
}
Parent.prototype.setFavoriteGames = function (game) {
  this.favoriteGames.push(game)
}
Parent.prototype.printFavoriteGames = function () {
  console.log(this.favoriteGames)
}
Parent.prototype.sayHello = function () {
  console.log(this.name, this.sex)
}

function Son (name, sex) {
  Parent.call(this, sex)
  this.name = name
}

Son.prototype = Object.create(Parent.prototype)
// Son.prototype = new Parent()
Son.prototype.constructor = Son

const jack = new Son('jack', 'boy')
// const lisa = new Son('lisa', 'girl')

console.log(jack)
// console.log(lisa)

jack.sayHello()
jack.setFavoriteGames('ball')
jack.printFavoriteGames()

// lisa.sayHello()
// lisa.setFavoriteGames('dance')
// lisa.printFavoriteGames()
jack.printFavoriteGames()
