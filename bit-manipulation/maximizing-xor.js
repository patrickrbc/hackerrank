
'use strict'

const assert = require('assert')

function maximizingXor (l, r) {

  let lxr = l ^ r
  let mostSignificantBit = 0

  while (lxr) {
    mostSignificantBit++
    lxr >>= 1
  }

  return (1 << mostSignificantBit) - 1
}

assert.equal(maximizingXor(3, 12), 15)
assert.equal(maximizingXor(11, 100), 127)
