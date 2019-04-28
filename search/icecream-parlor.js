
const assert = require('assert')

function icecreamParlor (m, arr) {

  let index, result

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= m)
      continue

    index = arr.slice(0, arr.length - 1).indexOf(m - arr[i])

    if ((index !== -1) && (i !== index))
      return [ i + 1, index + 1 ].sort((x, y) => x > y ? 1 : -1)
  }

  return result
}

assert.deepEqual(icecreamParlor(4, [1,4,5,3,2]), [1,4])
assert.deepEqual(icecreamParlor(4, [2,2,4,3]), [1,2])
