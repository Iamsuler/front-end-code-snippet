let arr = [...'abcdabc'];
arr.reduce((prev, cur) => {
  // console.log(prev)
  prev[cur] ? prev[cur]++ : prev[cur] = 1
  return prev
}, {})


let arr2 = [1, 2, 3, 4]
let result = arr2.reduce((prev, cur) => {
  console.log(prev)
  return prev + cur
})
console.log(result)