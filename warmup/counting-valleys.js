const assert = require('assert')

function countingValleys (n, s) {
  var down = 0, up = 0, valley = 0

  var downSeaLevel = false

  for (var i = 0, len = n; i < len; i++) {

    if (s[i] === 'D') {

      down++

      if ((down > up) && !downSeaLevel) {
        downSeaLevel = true
        valley++
      }

    } else {

      up++

      if ((up === down) && downSeaLevel)
        downSeaLevel = false
    }
  }

  return valley
}

assert.equal(countingValleys(4, 'DDUU'), 1)
assert.equal(countingValleys(6, 'DDUUDDU'), 2)
assert.equal(countingValleys(8, 'DDUUDDUDU'), 2)
assert.equal(countingValleys(10, 'DDUUDDUDUUU'), 2)
assert.equal(countingValleys(12, 'DDUUDDUDUUUD'), 2)
assert.equal(countingValleys(8, 'UDDDUDUU'), 1)
