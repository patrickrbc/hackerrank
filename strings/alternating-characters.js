
const assert = require('assert')

function alternatingCharacters (s) {

  var sum = 0

  for (let i = 1, len = s.length; i < len; i++)
    if (s[i] === s[i-1])
      sum++
  
  return sum
}

assert.equal(alternatingCharacters('AAAA'), 3)
assert.equal(alternatingCharacters('BBBBB'), 4)
assert.equal(alternatingCharacters('ABABABAB'), 0)
assert.equal(alternatingCharacters('AAABBB'), 4)
