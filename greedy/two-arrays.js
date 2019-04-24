
const assert = require('assert')

function twoArrays (k, A, B) {
  
  A.sort((x, y) => x-y)
  B.sort((x, y) => y-x)

  for (let i = 0, len = A.length; i < len; i++)
    if (A[i] + B[i] < k)
      return 'NO'

  return 'YES'
}

assert.equal(twoArrays(10, [2,1,3], [7,8,9]), 'YES')
assert.equal(twoArrays(5, [1,2,2,1], [3,3,3,4]), 'NO')
