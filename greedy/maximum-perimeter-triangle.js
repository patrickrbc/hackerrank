
const assert = require('assert')

function isTriangle (a, b, c) {
  return (a + b) > c ? true : false
}

function maximumPerimeterTriangle (sticks) {
  sticks.sort((a, b) => a > b ? 1 : -1)

  for (let i = sticks.length - 3; i >= 0; i--) {
    if (isTriangle(sticks[i], sticks[i+1], sticks[i+2])) {
      return sticks.slice(i, i+3)
    } else if (i === 0) {
      return [-1]
    }
  }
}

assert.deepEqual(maximumPerimeterTriangle([1,2,3]), [-1])
assert.deepEqual(maximumPerimeterTriangle([1,1,1,3,3]), [1,3,3])
assert.deepEqual(maximumPerimeterTriangle([1,1,1,3,3]), [1,3,3])
assert.deepEqual(maximumPerimeterTriangle([3,9,2,15,3]), [2,3,3])
