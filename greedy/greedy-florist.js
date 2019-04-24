
const assert = require('assert')

function getMinimumCost (k, c) {

  let cost = 0
  c.sort((x, y) => x-y).reverse()

  for (let i = 0, len = c.length; i < len; i++)
    cost += (Math.floor(i/k) + 1) * c[i]

  return cost
}

assert.equal(getMinimumCost(3, [1,3,5,7,9]), 29)
assert.equal(getMinimumCost(2, [2,5,6]), 15)
