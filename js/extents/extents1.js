/**
 * 原型链继承
 * 优点：
 *    1. 父类新增原型属性和方法，子实例都能访问到
 *    2. 简单易用
 * 缺点：
 *    1. 无法实现多继承
 *    2. 创建子实例的时候，无法向父构造函数传参
 *    3. 子实例共享父类属性，当有引用类型属性时，会相互影响
 */

function Parent (sex = 'boy') {
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
  console.log(this)
  console.log(this.name, this.sex)
}

function Son (name) {
  this.name = name
}

Son.prototype = new Parent()
// Son.prototype = Parent.prototype

const jack = new Son('jack')
const lisa = new Son('lisa')

jack.sayHello()
jack.setFavoriteGames('ball')
jack.printFavoriteGames()

lisa.sayHello()
lisa.setFavoriteGames('dance')
lisa.printFavoriteGames()
jack.printFavoriteGames()

console.log(jack)
console.log(lisa)
