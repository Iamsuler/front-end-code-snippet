let demo = {
  'name': 'suler'
}

Object.defineProperty(demo, 'name', {
  set: (value) => {
    console.log('set is exec')
    name = value
  },
  get: () => {
    console.log('get is exec')
    return name
  }
})

demo.name = 'jack'
console.log(demo.name)