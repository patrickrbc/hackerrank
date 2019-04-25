
const assert = require('assert')

function funnyString (s) {
  
  let diffs = []

  for (let i = 0, len = s.length - 1; i < len; i++)
    diffs.push(Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0)))

  s = s.split('').reverse().join('')

  for (let i = 0, len = s.length - 1; i < len; i++)
    if (Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0)) !== diffs[i])
      return 'Not Funny'

  return 'Funny'
}

assert.equal(funnyString('lmnop'), 'Funny')
assert.equal(funnyString('acxz'), 'Funny')
assert.equal(funnyString('bcxz'), 'Not Funny')
assert.equal(funnyString('az'), 'Funny')
