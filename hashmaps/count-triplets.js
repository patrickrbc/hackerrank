
const assert = require('assert')

function add (hashMap, value, count) {

  if (hashMap[value])
    hashMap[value] += count
  else
    hashMap[value] = count

  return hashMap[value]
}

function countTriplets (arr, r) {

  let triplets  = 0
  let candidate = {}
  let pairs     = {}

  arr.reverse()

  for (let i = 0, len = arr.length; i < len; i++) {

    if (pairs[arr[i]*r])
      triplets += pairs[arr[i]*r]

    if (candidate[arr[i]*r])
      add(pairs, arr[i], candidate[arr[i]*r])

    add(candidate, arr[i], 1)
  }

  return triplets
}

assert.equal(countTriplets([1,1,1], 1), 1)
assert.equal(countTriplets([1,1,1,1], 1), 4)
assert.equal(countTriplets([1,2,2,4], 2), 2)
assert.equal(countTriplets([1,2,4,8,16,32], 2), 4)
assert.equal(countTriplets([1,2,1,2,4], 2), 3)
assert.equal(countTriplets([1,3,9,9,27,81], 3), 6)
assert.equal(countTriplets([1,4,16,64,64,256], 4), 5)
assert.equal(countTriplets([1,5,5,25,125], 5), 4)
