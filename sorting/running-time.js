
'use strict'

const assert = require('assert')

function runningTime (arr) {

  let shifts = 0, temp

  for (let i = 1, len = arr.length; i < len; i++) {

    if (arr[i] >= arr[i-1])
      continue

    temp = arr[i]

    for (var j = (i - 1); arr[j] > temp; j--) {
      arr[j+1] = arr[j]
      shifts++
    }

    arr[j+1] = temp
  }

  return shifts
}

assert.equal(runningTime([2,1,3,1,2]), 4)
assert.equal(runningTime([4,4,3,4]), 2)
assert.equal(runningTime([1,1,2,2,3,3,5,5,7,7,9,9]),0)
assert.equal(runningTime([406,157,415,318,472,46,252,187,364,481,450,90,390,35,452,74,196,312,142,160,143,220,483,392,443,488,79,234,68,150,356,496,69,88,177,12,288,120,222,270,441,422,103,321,65,316,448,331,117,183,184,128,323,141,467,31,172,48,95,359,239,209,398,99,440,171,86,233,293,162,121,61,317,52,54,273,30,226,421,64,204,444,418,275,263,108,10,149,497,20,97,136,139,200,266,238,493,22,17,39]),2856)
