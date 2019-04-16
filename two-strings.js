
const assert = require('assert')

function twoStrings (s1, s2) {

  var alphabet = new Array(26)
  
  for (let i = 0, len = alphabet.length; i < len; i++)
    alphabet[i] = 0

  for (let i = 0, len = s1.length; i < len; i++)
    alphabet[s1.charCodeAt(i) - 97] = 1

  for (let i = 0, len = s2.length; i < len; i++)
    if (alphabet[s2.charCodeAt(i) - 97])
      return 'YES'
  
  return 'NO'
}

assert.equal(twoStrings('hello', 'world'), 'YES')
assert.equal(twoStrings('hi', 'world'), 'NO')
