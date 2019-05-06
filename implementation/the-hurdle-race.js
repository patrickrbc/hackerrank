
'use strict'

const assert = require('assert')

function hurdleRace (k, height) {

  let max = height[0]

  for (let i = 0, len = height.length; i < len; i++)
    if (height[i] > max)
      max = height[i]

  if (max > k)
    return max - k
  else
    return 0
}

assert.equal(hurdleRace(4, [1,6,3,5,2]), 2)
assert.equal(hurdleRace(7, [1,6,3,5,2]), 0)
