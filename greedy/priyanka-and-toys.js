const assert = require('assert')

function toys (w) {

  let containers = 1
  let min

  w.sort((x, y) => x > y ? 1 : -1)

  if (w.length === 1)
    return 1

  min = w[0]

  for (let i = 1, len = w.length; i < len; i++) {

    if (w[i] > (min + 4)) {
      containers++
      min = w[i]
    }
  }
  
  return containers
}

assert.equal(toys([1,2,3,21,7,12,14,21]), 4)
assert.equal(toys([1,2,3,4,5,10,11,12,13]), 2)
assert.equal(toys([99, 1234]), 2)
