
const assert = require('assert')


function pangrams (s) {

  var alphabet = new Array(26)
  var letters = 0

  s = s.replace(/\s+/g,'').toLowerCase()

  for (let i = 0, len = alphabet.length; i < len; i++)
    alphabet[i] = 0
  
  for (let i = 0, len = s.length; i < len; i++) {
    if (!alphabet[s.charCodeAt(i) - 97])
      letters++
    alphabet[s.charCodeAt(i) - 97]++
  }
  
  if (letters === 26)
    return 'pangram'
  else
    return 'not pangram'
}

assert.equal(pangrams('The quick brown fox jumps over the lazy dog'), 'pangram')
assert.equal(pangrams('The quick brown fo jumps over the lazy dog'), 'not pangram')
assert.equal(pangrams('We promptly judged antique ivory buckles for the next prize'), 'pangram')
assert.equal(pangrams('We promptly judged antique ivory buckles for the prize'), 'not pangram')
