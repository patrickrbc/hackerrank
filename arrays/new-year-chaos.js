
const assert = require('assert')

function minimumBribes (q) {

  var sum = 0

  for (let i = q.length - 1; i >= 0; i--) {

    if (q[i] - (i + 1) > 2)
      return 'Too chaotic'

    var start = q[i] > 0 ? q[i] - 2 : 0

    for (let j = start; j < i; j++) {
      if (q[j] > q[i])
        sum++
    }
  }

  return sum
}

assert.equal(minimumBribes([2, 5, 1, 3, 4]), 'Too chaotic')
assert.equal(minimumBribes([2, 1, 5, 3, 4]), '3')
assert.equal(minimumBribes([2, 1, 5, 3, 4, 6]), '3')
assert.equal(minimumBribes([2, 1, 5, 3, 4, 6, 7]), '3')
assert.equal(minimumBribes([3, 1, 2]), '2')
assert.equal(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]), '4')
assert.equal(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]), '7')
