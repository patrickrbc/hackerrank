
const assert = require('assert')

function compareTriplets (a, b) {

  var result = [0, 0]
  for (let i = 0; i < 3; i++) {

    if (a[i] > b[i])
      result[0]++
    else if (a[i] < b[i])
      result[1]++
  }

  return result
}

assert.equal(compareTriplets([17, 28, 30], [99, 16, 8]).join(), '2,1')
assert.equal(compareTriplets([5, 6, 7], [3, 6, 10]).join(), '1,1')
