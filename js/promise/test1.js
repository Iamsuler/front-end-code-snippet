function sleep(duration) {
  return new Promise(function(resolve, reject) {
      setTimeout(resolve,duration);
  })
}
async function foo(){
  console.log("a")
  await sleep(2000)
  console.log("b")
}
foo()