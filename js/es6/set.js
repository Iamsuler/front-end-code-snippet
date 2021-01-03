let arr = new Set([1,2,2,3,3,4,4])
arr.add('wang')
function slice () {
  let arr4 = Array.prototype.slice.call(arguments)
  console.log('arr4', arr4)
}
slice(1, 2, 3)
console.log([...new Set(arr)])


var arr2 = [[1, 2, [3, 4]], 5, 6];
var [[d, ...arr3]] = arr2;
console.log(d);//1
console.log(arr3)

let splice_arr = [1, 2, 3, 4, 5]
let new_splce_arr = splice_arr.splice(1, 1)

console.log(splice_arr, new_splce_arr)