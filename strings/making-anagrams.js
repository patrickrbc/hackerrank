
const assert = require('assert')

function makeAnagrams (a, b) {

  var alphabet1 = new Array(26)
  var alphabet2 = new Array(26)
  var diff = new Array(26)
  var sum = 0

  for (let i = 0; i < 26; i++)
    alphabet1[i] = alphabet2[i] = 0

  for (let i = 0, len = a.length; i < len; i++) {

    if (alphabet1[a.charCodeAt(i) - 97])
      alphabet1[a.charCodeAt(i) - 97]++
    else
      alphabet1[a.charCodeAt(i) - 97] = 1 
  }
    
  for (let i = 0, len = b.length; i < len; i++) {

    if (alphabet2[b.charCodeAt(i) - 97])
      alphabet2[b.charCodeAt(i) - 97]++
    else
      alphabet2[b.charCodeAt(i) - 97] = 1 
  }

  for (let i = 0; i < 26; i++) {
    if (alphabet1[i] && alphabet2[i])
      sum += Math.abs(alphabet1[i] - alphabet2[i])
    else
      sum += alphabet1[i] ^ alphabet2[i]
  }
  
  return sum
}

assert.equal(makeAnagrams('cde', 'abc'), 4)
assert.equal(makeAnagrams('a', 'a'), 0)
assert.equal(makeAnagrams('aasd', 'akkk'), 6)
assert.equal(makeAnagrams('abc', 'abc'), 0)
assert.equal(makeAnagrams('qwerty', 'asdfgy'), 10)
