/*
 * To solve this challenge I've created a hashmap for the values and their
 * frequencies (hashMap) and another hashmap to save the frequency of
 * frequencies (freqHashMap)
 */

const assert = require('assert')

function increment (hashMap, value) {

  if (!value)
    return

  if (hashMap[value])
    hashMap[value]++
  else
    hashMap[value] = 1
}

function decrement (hashMap, value) {

  if (hashMap[value])
    hashMap[value]--
}

function updateFreq (freqHashMap, hashMap, value, operation) {

  if (operation === 'inc')  {
    if (!hashMap[value]) {
      increment(freqHashMap, 1)
    } else {
      decrement(freqHashMap, hashMap[value])
      increment(freqHashMap, hashMap[value] + 1)
    }
  } else if (operation === 'dec') {
    decrement(freqHashMap, hashMap[value])
    increment(freqHashMap, hashMap[value] - 1)
  }
}

function freqQuery (series) {

  let hashMap = {}
  let freqHashMap = {}
  let out = []


  for (let i = 0, len = series.length; i < len; i++) {
    
    let query = series[i][0]
    let value = series[i][1]

    if (query === 1) {

      updateFreq(freqHashMap, hashMap, value, 'inc')
      increment(hashMap, value)

    } else if (query === 2) {

      updateFreq(freqHashMap, hashMap, value, 'dec')
      decrement(hashMap, value)

    } else {

      freqHashMap[value] ?  out.push(1) : out.push(0)

    }
  }

  return out
}

assert.equal(freqQuery([[1,5],[1,6],[3,1]]).join(''), '1')
assert.equal(freqQuery([[1,5],[1,6],[3,2]]).join(''), '0')

assert.equal(freqQuery(
  [ [ 1, 5 ],
    [ 1, 6 ],
    [ 3, 2 ],
    [ 1, 10 ],
    [ 1, 10 ],
    [ 1, 6 ],
    [ 2, 5 ],
    [ 3, 2 ] ]).join(''), '01')

assert.equal(freqQuery(
  [ [ 3, 4 ], [ 2, 1003 ], [ 1, 16 ], [ 3, 1 ] ]).join(''), '01')

assert.equal(freqQuery([ [ 1, 3 ],
  [ 2, 3 ],
  [ 3, 2 ],
  [ 1, 4 ],
  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 4 ],
  [ 3, 2 ],
  [ 2, 4 ],
  [ 3, 2 ] ]).join(''), '011')

assert.equal(freqQuery([ [ 1, 3 ],
  [ 1, 4 ],
  [ 1, 4 ],

  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 5 ],
  [ 1, 5 ],

  [ 2, 5 ],
  [ 3, 5 ] ]).join(''), '1')
