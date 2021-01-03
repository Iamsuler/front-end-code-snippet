let arr = [1, [2, [3, 4]]];
function flattern(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattern(arr[i])
    } else {
      result.push(arr[i])
    }
  }
  console.log('result', result)
  return result;
}
console.log(flattern(arr));