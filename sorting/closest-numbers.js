
'use strict'

const assert = require('assert')

function closestNumbers (arr) {

  let diff, min = Math.abs(arr[1] - arr[0])
  let result = []

  arr.sort((x, y) => x > y ? 1 : -1)

  for (let i = 1, len = arr.length; i < len; i++) {
    diff = Math.abs(arr[i] - arr[i-1])

    if (diff < min)
      min = diff
  }

  for (let i = 1, len = arr.length; i < len; i++) {
    diff = Math.abs(arr[i] - arr[i-1])

    if (diff === min)
      result.push(arr[i-1], arr[i])
  }

  return result
}

assert.deepEqual(closestNumbers([5,4,3,2]),
  [2,3,3,4,4,5])
assert.deepEqual(
  closestNumbers([-20,-3916237,-357920,-3620601,7374819,-7330761,30,6246457,-6461594,266854]),
    [-20,30])
assert.deepEqual(
  closestNumbers([-20,-3916237,-357920,-3620601,7374819,-7330761,30,6246457,-6461594,266854,-520,-470]),
  [-520,-470,-20,30])
