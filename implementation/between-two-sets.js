
'use strict'

const assert = require('assert')

function getTotalX (a, b) {
  
  let count = 0

  for (let i = a[0]; i <= b[0]; i++) {

    // check if all elements of a are factors of i
    for (var j = 0, len = a.length; j < len; j++)
      if (a[j] > i || i % a[j] !== 0)
        break

    if (j !== a.length)
      continue
    
    // check if all elements of b are multiples of i
    for (var j = 0, len = b.length; j < len; j++)
      if (b[j] < i || b[j] % i !== 0)
        break

    if (j === b.length)
      count++
  }
  
  return count
}

assert.equal(getTotalX([2,4], [16,32,96]), 3)
assert.equal(getTotalX([2,4], [24,36]), 2)

