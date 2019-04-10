
const assert = require('assert')

function rotLeft (a, d) {
  for (var i = 0; i < d; i++)
    a.push(a.shift())
  return a
}

assert.equal(rotLeft([1,2,3,4,5], 4).join(' '), '5 1 2 3 4')
