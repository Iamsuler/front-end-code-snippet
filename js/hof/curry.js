/**
 * 现在我们已经知道了，当柯里化后的函数接收到足够的参数后，就会开始执行原函数。
 * 而如果接收到的参数不足的话，就会返回一个新的函数，用来接收余下的参数。
 * 基于上述的特点，我们就可以自己实现一个 curry 函数
 */

function curry (func) {
  return function curried (...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

// 作用
// 1. 参数复用
function buildURI (schema, domain, path) {
  return `${schema}://${domain}/${path}`
}

const buildURICurry = curry(buildURI)
const myGithubPath = buildURICurry('https', 'github.com')
const profilePath = myGithubPath('semlinker/semlinker')
const awasomeTsPath = myGithubPath('semlinker/awesome-typescript')
// console.log(myGithubPath)
console.log(profilePath)
console.log(awasomeTsPath)
