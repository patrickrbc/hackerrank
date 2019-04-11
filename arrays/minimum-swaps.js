
const assert = require('assert')

function swap (arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
}

function minimumSwaps (arr) {
  var sum = 0
  var nSorted = 0

  for (let i = 0, len = arr.length - 1; i < len; i++) {
    while (arr[i] !== i + 1) {
      swap(arr, i, arr[i] - 1)
      sum++
    }
  }
  
  return sum
}

assert.equal(minimumSwaps([4, 3, 1, 2]), 3)
assert.equal(minimumSwaps([2, 3, 4, 1, 5]), 3)
assert.equal(minimumSwaps([1, 3, 5, 2, 4, 6, 7]), 3)
