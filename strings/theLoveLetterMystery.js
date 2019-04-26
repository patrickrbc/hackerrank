
const assert = require('assert')

function theLoveLetterMystery (s) {

  let s1, s2
  let sum = 0, diff

  s1 = s.slice(0, s.length/2)

  if (s.length % 2 === 0)
    s2 = s.slice(s.length/2, s.length)
  else
    s2 = s.slice(s.length/2 + 1, s.length)

  s2 = s2.split('').reverse().join('')

  for (let i = 0, len = s1.length; i < len; i++)
    sum += Math.abs(s1[i].charCodeAt(0) - s2[i].charCodeAt(0))
  
  return sum
}

assert.equal(theLoveLetterMystery('abcba'), 0)
assert.equal(theLoveLetterMystery('abc'), 2)
assert.equal(theLoveLetterMystery('abcd'), 4)
assert.equal(theLoveLetterMystery('cba'), 2)
