
const assert = require('assert')

function maxPrices (prices, k) {
  var sum = 0

  prices = prices.sort((x, y) => x > y ? 1 : -1)

  for (var i = 0, len = prices.length; i < len; i++) {
    if (prices[i] + sum > k)
      return i
    else if (prices[i] + sum === k)
      return i + 1
    else
      sum += prices[i]
  }

  return i
}

assert.equal(maxPrices([ 1, 12, 5, 111, 200, 1000, 10 ], 50), 4)
assert.equal(maxPrices([ 1, 2, 3, 4 ], 7), 3)
