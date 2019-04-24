
const assert = require('assert')

function lexicalSort (a, b) {

  a = a.toString()
  b = b.toString()

  if (a.length === b.length) {
    if (a > b)
      return 1
    else
      return -1
  }

  return a.length > b.length ? 1 : -1
}

function getMax (arr) {

  let max   = arr[0]
  let index = 0

  for (let i = 0, len = arr.length; i < len; i++) {
    if ( lexicalSort(arr[i], max) === 1 ) {
      max   = arr[i]
      index = i
    }
  }

  return { value: max, index: index }
}

function largestPermutation (k, arr) {

  let sortedArr = arr.concat().sort(lexicalSort)
  let indexes = {}, max, aux

  for (let i = 0, len = arr.length; i < len; i++)
    indexes[arr[i]] = i

  for (let i = 0, len = arr.length - 1; i < len; i++) {

    max = sortedArr.pop()

    if ( lexicalSort(max, arr[i]) === 1 ) {

      aux = arr[indexes[max]]

      arr[indexes[max]] = arr[i]

      // update indexes
      indexes[arr[i]] = indexes[max]
      indexes[aux] = i

      arr[i] = aux
      k--
    }

    if (k === 0)
      return arr
  }

  return arr
}

assert.deepEqual(largestPermutation(1, [4,2,3,5,1]), [5,2,3,4,1])
assert.deepEqual(largestPermutation(1, [2,1,3]), [3,1,2])
assert.deepEqual(largestPermutation(1, [2,1]), [2,1])
assert.deepEqual(largestPermutation(1, [977, 99]), [977, 99])
