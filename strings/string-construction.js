
const assert = require('assert')

function stringConstruction (s) {
  return ([...new Set(s)]).length
}

assert.equal(stringConstruction('abcd'), 4)
assert.equal(stringConstruction('abab'), 2)
