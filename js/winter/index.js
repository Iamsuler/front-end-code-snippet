let undefined = 0
// console.log(typeof undefined)

// console.log(.1 + .2 == .3)
// console.log(.2 + .3 == .5)
// console.log(1 - .1)
// console.log(.1 + .2)

var o = { a: 1 }; Object.defineProperty(o, "b", {value: 2, writable: false, enumerable: false, configurable: true}); //a和b都是数据属性，但特征值变化了
Object.getOwnPropertyDescriptor(o,"a"); // {value: 1, writable: true, enumerable: true, configurable: true} 
Object.getOwnPropertyDescriptor(o,"b"); // {value: 2, writable: false, enumerable: false, configurable: true}
o.b = 3;
// console.log(o.b); // 2

// 微任务和宏任务

// setTimeout(()=>console.log("d"), 0)
// var r = new Promise(function(resolve, reject){
//     resolve()
// });
// r.then(() => { 
//     var begin = Date.now();
//     while(Date.now() - begin < 1000);
//     console.log("c1") 
//     new Promise(function(resolve, reject){
//         resolve()
//     }).then(() => console.log("c2"))
// });


// function sleep(duration) {
//   return new Promise(function(resolve, reject) {
//       setTimeout(resolve,duration);
//   })
// }
// async function foo(name){
//   await sleep(2000)
//   console.log(name)
// }
// async function foo2(){
//   await foo("a");
//   await foo("b");
// }
// foo2()


// function foo(){
//   try{
//     return 0;
//   } catch(err) {

//   } finally {
//     return 1;
//   }
// }

// console.log(foo());



var f = function(){
  return "";
}
var g = f/*这里没有被自动插入分号*/
`Template`.match(/(a)/);
console.log(RegExp.$1)
