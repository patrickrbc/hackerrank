
'use strict'

const assert = require('assert')

function sumXor (n) {

  let count = 0

  if (n === 0)
    return 1

  n = n.toString(2)

  for (let i = 0, len = n.length; i < len; i++)
    if (n[i] === '0')
      count++

  return Math.pow(2, count)
}

assert.equal(sumXor(10), 4)
assert.equal(sumXor(0), 1)
