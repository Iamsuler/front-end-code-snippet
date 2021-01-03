var calendar = [...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));

var randomID = Math.random().toString(36).substring(2)

var localTime = new Date().toLocaleString().substring(10, 19);

var arr = [1,2,3,4,5,6,7,8,9];
(arr) => arr.sort(() => Math.random() - .5)
console.log(arr)