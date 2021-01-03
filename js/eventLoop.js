let data = 1
function log (data) {
  console.log(data)
}

log(data)

// macroTask
setTimeout(() => {
  data = 5
  log(data)
}, 2000)

// microTask
Promise.resolve()
  .then(() => {
    data = 3
    log(data)
  })
  .then(() => {
    data = 4
    log(data)
  })

data = 2
log(data)