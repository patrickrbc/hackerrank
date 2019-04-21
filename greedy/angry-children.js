
const assert = require('assert')

function maxMin (k, arr) {

  let minUnfairness, unf

  arr.sort((x, y) => x > y ? 1 : -1)

  for (let i = 0, len = arr.length; (i + k) <= len; i++) {
    unf = Math.abs(arr[i] - arr[i + k - 1])
    if (!minUnfairness || unf < minUnfairness)
      minUnfairness = unf
  }
  
  return minUnfairness
}

assert.equal(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]), 20)
assert.equal(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]), 3)
assert.equal(maxMin(2, [2, 1, 2, 1, 2, 1]), 0)
