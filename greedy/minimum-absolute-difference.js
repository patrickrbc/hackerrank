
const assert = require('assert')

function findClosest (arr, i) {
  var right, left

  if (i === 0)
    left = 0
  else if (i === arr.length - 1)
    right = 0

  right = Math.abs(arr[i+1] - arr[i])
  left = Math.abs(arr[i-1] - arr[i])

  return right > left ? left : right
}

function minimumAbsoluteDifference (arr) {
  var combinations = []
  var subResult, pair
  var min = Math.abs(arr[0] - arr[1])
  var sum = 0

  arr.sort()
  
  for (let i = 0, len = arr.length; i < len; i++) {
    subResult = findClosest(arr, i)
    if (subResult < min)
      min = subResult
  }

  return min
}

assert.equal(minimumAbsoluteDifference([ 3, -7, 0 ]), 3)
assert.equal(minimumAbsoluteDifference([ -59, -36, -13, 1, -53, -92, -2, -96, -54, 75 ]), 1)
