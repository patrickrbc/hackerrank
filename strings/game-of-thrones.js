
const assert = require('assert')

function gameOfThrones (s) {

  let alphabet = new Array(26).fill(0)
  let s1, s2, odds = 0

  s1 = s.slice(0, s.length/2)

  if (s.length % 2 === 0)
    s2 = s.slice(s.length/2, s.length)
  else
    s2 = s.slice(s.length/2 + 1, s.length)

  for (let i = 0, len = s.length; i < len; i++) {
    if (alphabet[s[i]])
      alphabet[s[i]]++
    else
      alphabet[s[i]] = 1
  }
  
  for (let i in alphabet) {

    if (alphabet[i] % 2 !== 0)
      odds++
  }

  if (s.length % 2 !== 0 && odds === 1)
    return 'YES'
  if (s.length % 2 === 0 && odds === 0)
    return 'YES'
  else
    return 'NO'
}

assert.equal(gameOfThrones('aaabbbb'), 'YES')
assert.equal(gameOfThrones('cdefghmnopqrstuvw'), 'NO')
assert.equal(gameOfThrones('cdcdcdcdeeeef'), 'YES')
