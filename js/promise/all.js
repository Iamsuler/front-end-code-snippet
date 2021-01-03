var p1 = Promise.resolve(3)
var p2 = Promise.reject(5)

Promise.all([true, p1, p2]).then((value) => {
  console.log(value)
}).catch((err) => {
  console.log(err)
})