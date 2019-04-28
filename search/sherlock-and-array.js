'use strict'

const assert = require('assert')

function balancedSums (arr) {

  let sumsArrLeft = new Array(arr.length)
  let sumsArrRight = new Array(arr.length)

  sumsArrLeft[0] = 0
  sumsArrRight[arr.length - 1] = 0

  for (let i = 1, len = arr.length; i < len; i++)
    sumsArrLeft[i] = sumsArrLeft[i-1] + arr[i-1]

  for (let i = arr.length - 2; i >= 0; i--)
    sumsArrRight[i] = sumsArrRight[i+1] + arr[i+1]

  for (let i = 0, len = arr.length; i < len; i++)
    if (sumsArrLeft[i] === sumsArrRight[i])
      return 'YES'
  
  return 'NO'
}

assert.equal(balancedSums([1,1,4,1,1]), 'YES')
assert.equal(balancedSums([1]), 'YES')
assert.equal(balancedSums([1,2,3]), 'NO')
assert.equal(balancedSums([1,2,3,3]), 'YES')
assert.equal(balancedSums([2,0,0,0]), 'YES')
assert.equal(balancedSums([0,0,2,0]), 'YES')
