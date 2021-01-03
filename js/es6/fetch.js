fetch('./data/test.json').then(res => {
  console.log(res)
  return res.json()
}).then(body => console.log(body))