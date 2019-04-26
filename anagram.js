
const assert = require('assert')

function anagram (s) {

  var alphabet1 = new Array(26)
  var alphabet2 = new Array(26)
  let sum = 0, letter, s1, s2

  if (s.length % 2 !== 0)
    return -1

  s1 = s.substring(0, s.length/2)
  s2 = s.substring(s.length/2, s.length)

  for (let i = 0, len = s1.length; i < len; i++) {

    if (alphabet1[s1[i]])
      alphabet1[s1[i]]++
    else
      alphabet1[s1[i]] = 1
  }

  for (let i = 0, len = s2.length; i < len; i++) {

    if (alphabet2[s2[i]])
      alphabet2[s2[i]]++
    else
      alphabet2[s2[i]] = 1
  }

  for (let i = 0, len = 26; i < len; i++) {
    letter = String.fromCharCode(i + 97)
    sum += Math.abs((alphabet1[letter] || 0) - (alphabet2[letter] || 0))
  }

  return sum/2
}

assert.equal(anagram('aaabbb'), '3')
assert.equal(anagram('ab'), '1')
assert.equal(anagram('abc'), '-1')
assert.equal(anagram('mnop'), '2')
assert.equal(anagram('xyyx'), '0')
assert.equal(anagram('xaxbbbxx'), '1')
