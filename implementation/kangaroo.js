
'use strict'

const assert = require('assert')

function kangaroo (x1, v1, x2, v2) {

  for (;; x1 += v1, x2 += v2) {

    if ((x1 < x2 && v1 <= v2) || (x2 < x1 && v2 <= v1))
      return 'NO'

    if (x1 === x2)
      return 'YES'
  }
}

assert.equal(kangaroo(0,3,4,2), 'YES')
assert.equal(kangaroo(0,2,5,3), 'NO')
assert.equal(kangaroo(43,2,70,2), 'NO')
