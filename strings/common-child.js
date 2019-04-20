
const assert = require('assert')

function max (a, b) {
  return a > b ? a : b
}

function commonChild (s1, s2) {

  let count = 0
  let results = new Array(s1.length + 1).fill(0)
    .map(item =>(new Array(s2.length + 1).fill(0)))

  for (var i = 0, len = s1.length; i <= len; i++) {
    for (var j = 0, len2 = s2.length; j <= len2; j++) {

      if (!i || !j)
        results[i][j] = 0
      else if (s1[i-1] === s2[j-1])
        results[i][j] = 1 + results[i-1][j-1]
      else
        results[i][j] = max(results[i-1][j], results[i][j-1])
    }
  }

  return results[i-1][j-1]
}

assert.equal(commonChild('SHINCHAN', 'NOHARAAA'), 3)
assert.equal(commonChild('ABCDEF', 'FBDAMN'), 2)
assert.equal(commonChild('HARRY', 'SALLY'), 2)
