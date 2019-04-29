
'use strict'

const assert = require('assert')

function lonelyinteger (a) {
  return a.reduce((x, y) => x ^ y)
}

assert.equal(lonelyinteger([0,0,1,2,1]), 2)
assert.equal(lonelyinteger([1,1,2]), 2)
assert.equal(lonelyinteger([1,2,6,4,2,4,6,9,9]), 1)
