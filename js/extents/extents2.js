/**
 * 借用父类构造函数继承
 * 关键：在子类构造函数中使用call，apply调用父类构造函数实现父类私有属性继承（函数复用）
 * 优点：
 *    1. 创建子类实例时可以向父类传参
 *    2. 可以实现多继承，在子类构造函数中调用多个父类构造函数
 *    3. 解决了原型链继承中子类共享父类引用属性的问题
 * 缺点：
 *    1. 每次创建子类实例时，都会调用一次父类构造函数，影响性能
 *    2. 只继承父类的实例属性，没有继承父类的原型属性
 */

function Parent (sex = 'boy') {
  console.log('Parent')
  this.sex = sex
  this.favoriteGames = []

  this.setSex = function (sex) {
    this.sex = sex
  }
  this.printSex = function () {
    console.log(this.sex)
  }
  this.setFavoriteGames = function (game) {
    this.favoriteGames.push(game)
  }
  this.printFavoriteGames = function () {
    console.log(this.favoriteGames)
  }
  this.sayHello = function () {
    console.log(this.name, this.sex)
  }
}

// Parent.prototype.setSex = function (sex) {
//   this.sex = sex
// }
// Parent.prototype.printSex = function () {
//   console.log(this.sex)
// }
// Parent.prototype.setFavoriteGames = function (game) {
//   this.favoriteGames.push(game)
// }
// Parent.prototype.printFavoriteGames = function () {
//   console.log(this.favoriteGames)
// }
// Parent.prototype.sayHello = function () {
//   console.log(this)
//   console.log(this.name, this.sex)
// }

function Son (name, sex) {
  Parent.call(this, sex)
  this.name = name
}

const jack = new Son('jack', 'boy')
const lisa = new Son('lisa', 'girl')

console.log(jack)
console.log(lisa)

jack.sayHello()
jack.setFavoriteGames('ball')
jack.printFavoriteGames()

lisa.sayHello()
lisa.setFavoriteGames('dance')
lisa.printFavoriteGames()
jack.printFavoriteGames()
