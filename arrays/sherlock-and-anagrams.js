
const assert = require('assert')

function isAnagram (first, second) {
 
  if (first.length !== second.length)
    return false

  var firstLetterCount = new Array(26)
  var secondLetterCount = new Array(26)

  for (let i = 0, len = firstLetterCount.length; i < len; i++) {
    firstLetterCount[i] = 0
    secondLetterCount[i] = 0
  }

  for (let i = 0, len = first.length; i < len; i++)
    firstLetterCount[first.charCodeAt(i) - 97]++

  for (let i = 0, len = second.length; i < len; i++)
    secondLetterCount[second.charCodeAt(i) - 97]++

  return secondLetterCount.join() === firstLetterCount.join()
}

function sherlockAndAnagrams (s) {
  var anagrams = 0
  var len = s.length

  for (let wordSize = 1; wordSize < len; wordSize++)
    for (let i = 0; i < len; i++)
      for (let j = i + 1; (j + wordSize) <= len; j++)
        if ( isAnagram(s.slice(i, i + wordSize), s.slice(j, j + wordSize)) )
          anagrams++

  return anagrams
}

assert.equal(sherlockAndAnagrams('abba'), 4)
assert.equal(sherlockAndAnagrams('cdcd'), 5)
assert.equal(sherlockAndAnagrams('abcd'), 0)
assert.equal(sherlockAndAnagrams('ifailuhkqq'), 3)
assert.equal(sherlockAndAnagrams('kkkk'), 10)
