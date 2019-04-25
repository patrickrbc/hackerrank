
const assert = require('assert')

function getWeight (c, reps) {
  return (c.charCodeAt(0) - 96) * reps
}

function weightedUniformStrings (s, queries) {

  let hashset = {}
  let output = []
  let reps = 1

  if (s.length === 1)
    hashset[getWeight(s[0], 1)] = true

  for (let i = 1, len = s.length; i < len; i++) {

    if (s[i] === s[i-1]) {
      hashset[getWeight(s[i-1], reps)] = true
      reps++

    } else {
      hashset[getWeight(s[i-1], reps)] = true
      reps = 1
    }

    if (i === len - 1)
      hashset[getWeight(s[i], reps)] = true
  }

  for (let i = 0, len = queries.length; i < len; i++) {

    if (hashset[queries[i]])
      output.push('Yes')
    else
      output.push('No')
  }

  return output
}

assert.deepEqual(weightedUniformStrings('abccddde', [1,3,12,5,9,10]), [
  'Yes',
  'Yes',
  'Yes',
  'Yes',
  'No',
  'No'
])

assert.deepEqual(weightedUniformStrings('aaabbbbcccddd', [9,7,8,12,5]), [
  'Yes',
  'No',
  'Yes',
  'Yes',
  'No'
])

assert.deepEqual(weightedUniformStrings('l', [1, 12]), [
  'No',
  'Yes'
])
