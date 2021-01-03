let user1 = { name: 'piter', age: 18, id: 1 }
let user2 = { name: 'mark', age: 30, id: 2 }

const mapCache = new WeakMap()

function cache (obj) {
  if (mapCache.has(obj)) {
    return [mapCache.get(obj), 'cached']
  }

  let { name, id } = obj
  let value = `${name} has a id of ${id}`
  mapCache.set(obj, value)

  return [value, 'computed']
}

    cache(user1)
cache(user2)
cache(user1)

console.log(mapCache)

user1 = null

console.log(mapCache)