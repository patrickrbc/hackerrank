
'use strict'

const assert = require('assert')
const bigNum = require('bignumber.js')

function bigSorting (unsorted) {

  return unsorted.sort((x, y) => {
    let xNum = new bigNum(x)
    let yNum = new bigNum(y)
    return xNum.comparedTo(yNum)
  })
}

assert.deepEqual(
  bigSorting(['31415926535897932384626433832795','1','3','10','3','5']),
    ['1','3','3','5','10','31415926535897932384626433832795']
)
