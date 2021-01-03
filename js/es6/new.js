var obj = {
  name: 'jack',
  sayName: function () {
    console.log(this.name)
  }
}

var new_obj = new obj()