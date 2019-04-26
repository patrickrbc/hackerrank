
const assert = require('assert')

function commonChild (x, y) {

  let count = 0
  let results = new Array(x.length + 1).fill(0)
    .map(item =>(new Array(y.length + 1).fill(0)))

  for (var i = 0, len = x.length; i <= len; i++) {
    for (var j = 0, len2 = y.length; j <= len2; j++) {

      if (!i || !j)
        results[i][j] = 0
      else if (x[i-1] === y[j-1])
        results[i][j] = 1 + results[i-1][j-1]
      else
        results[i][j] = Math.max(results[i-1][j], results[i][j-1])
    }
  }

  return results[x.length][y.length]
}

assert.equal(commonChild('SHINCHAN', 'NOHARAAA'), 3)
assert.equal(commonChild('ABCDEF', 'FBDAMN'), 2)
assert.equal(commonChild('HARRY', 'SALLY'), 2)
assert.equal(commonChild('hackerranks', 'hackers'), 7)
assert.equal(commonChild('hacker', 'HACKERhka'), 2)
assert.equal(commonChild('abcd', 'abdc'), 3)
assert.equal(commonChild('abc', 'aedace'), 2)
assert.equal(commonChild('', 'a'), 0)
assert.equal(commonChild('a', ''), 0)
assert.equal(commonChild('-1', ''), 0)
assert.equal(commonChild('axaaabaa3a', 'aaaa'), 4)
assert.equal(commonChild('abc', 'cbac'), 2)
assert.equal(commonChild('AGGTAB', 'GXTXAYB'), 4)
