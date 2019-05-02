
'use strict'

const assert = require('assert')

function findMedian (arr) {
  return arr.sort((x, y) => x > y ? 1 : -1)[Math.floor(arr.length/2)]
}

assert.equal(findMedian([1,2,3,4,5]), 3)
assert.equal(findMedian([0,1,2,4,6,5,3]), 3)
