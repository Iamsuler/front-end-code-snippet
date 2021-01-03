let arr = [1, 2, 3, 4]
let arr2 = [...'hello']
// console.log(arr2)


// rest
function bar (a, ...args) {
  console.log(args)
}

bar(1,2,3,4)