

const assert = require('assert')

function repeatedString (s, n) {

  var reps = Math.floor(n / s.length)
  var chunk = n - (reps * s.length)
  var count = 0

  for (var i = 0, len = s.length; i < len; i++) {
    if (s[i] === 'a')
      count++
  }

  count *= reps

  for (var i = 0, len = chunk; i < len; i++) {
    if (s[i] === 'a')
      count++
  }

  return count
}

assert.equal(repeatedString('aba', 10), 7)
assert.equal(repeatedString('a', 10000000), 10000000)
