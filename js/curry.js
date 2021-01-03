const add = (...agrs) => {
  const _args = agrs
  function _adder (...args) {
    _args.push(...args)
    console.log(...args)

    return _adder
  }

  _adder.toString = function () {
    console.log('tostring')
    return _args.reduce((sum, cur) => sum + cur)
  }

  return _adder
}

const result = add(1)(1, 2, 3)(4)
console.log(result)
