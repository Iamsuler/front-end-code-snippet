let list = [{
    id: "a-1",
    label: '一级 1',
    children: [{
      id: "b-3",
      label: '二级 1-1',
      children: [{
        id: "c-9",
        label: '三级 1-1-1',
        children: [{
          id: "d-11",
          label: '四级 1-1-1'
        }, {
          id: "d-12",
          label: '四级 1-1-2'
        }]
      }, {
        id: "c-10",
        label: '三级 1-1-2'
      }]
    }]
  }, {
    id: "a-2",
    label: '一级 2',
    children: [{
      id: "b-5",
      label: '二级 2-1'
    }, {
      id: "b-6",
      label: '二级 2-2'
    }]
  }, {
    id: "a-3",
    label: '一级 3',
    children: [{
      id: "b-7",
      label: '二级 3-1'
    }, {
      id: "b-8",
      label: '二级 3-2'
    }]
  }]
var listChildren = []
function getArrayChildren (arr) {
  arr.forEach(item => {
    if (Array.isArray(item.children) && item.children.length > 0) {
      getArrayChildren(item.children)
    } else {
      console.log(item)
      listChildren.push(item)
    }
  });
}
test()
getArrayChildren(list)
console.log(listChildren)