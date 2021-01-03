Function.prototype._bind = function (...context) {
  if (typeof this !== 'function') {
    throw new Error('Type Error')
  }

  let that = this
  let [target , ...args] = context
  return function (...params) {
    return that.apply(target, args.concat(params))
  }
}

function test (a, b) {
  console.log('作用域绑定 '+ this.value)
  console.log('testBind参数传递 '+ a.value2)
  console.log('调用参数传递 ' + b)
}

var obj = {
  value:'ok'
}

var fun_new = test._bind(obj,{value2:'also ok'})

fun_new('hello bind')