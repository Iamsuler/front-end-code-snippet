function checkedType (target) {
  return Object.prototype.toString.toLocaleLowerCase(target).slice(8, -1)
}

function deepClone (target) {
  let result, targetType = checkedType(target);
  if (targetType === 'object') {
    result = {}
  } else if (targetType === 'Array') {
    result = []
  } else {
    return result
  }

  for (let i in target) {
    let value = target[i], type = checkedType(value)
    if (type === 'object' || type === 'Array') {
      // 继续遍历获取value值
      result[i] = deepClone(value)
    } else {
      result[i] = value
    }
  }

  return result
}

function oprArray (arr) {
  let result = []
  for (let index = 0, len = arr.length; index < len; index++) {
    let item = arr[index]
    if (typeof item === 'object') {
      result = result.concat(oprArray(item))
    } else {
      result.push(item)
    }
    
  }

  return result
}

let arr = [1, 2, [3, [4, 5], [6, 7], 8, 9]]
let new_arr = oprArray(arr)
console.log(new_arr)