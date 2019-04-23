const assert = require('assert')

function beautifulPairs (A, B) {

  const LENGTH = A.length
  let hashMap = {}
  let pairs = 0

  for (let i = 0; i < LENGTH; i++) {

    if (hashMap[A[i]])
      hashMap[A[i]]++
    else
      hashMap[A[i]] = 1
  }

  for (let i = 0; i < LENGTH; i++) {

    if (hashMap[B[i]]) {
      hashMap[B[i]]--
      pairs++
    }
  }
  
  if (pairs === LENGTH) {
    pairs--
  } else {
    pairs++
  }

  return pairs
}

assert.deepEqual(beautifulPairs([1,2,3,4], [1,2,3,3]), 4)
assert.deepEqual(beautifulPairs([3,5,7,11,5,8], [5,7,11,10,5,8]), 6)
