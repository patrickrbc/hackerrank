
'use strict'

const assert = require('assert')

function breakingRecords (scores) {

  let result, max, min

  result = [0, 0]
  max    = scores[0] || 0
  min    = scores[0] || 0

  for (let i = 1, len = scores.length; i < len; i++) {

    if (scores[i] > max) {
      result[0]++
      max = scores[i]
    }

    if (scores[i] < min) {
      result[1]++
      min = scores[i]
    }
  }

  return result
}

assert.deepEqual(breakingRecords([10,5,20,20,4,5,2,25,1]), [2,4])
assert.deepEqual(breakingRecords([3,4,21,36,10,28,35,5,24,42]), [4,0])
