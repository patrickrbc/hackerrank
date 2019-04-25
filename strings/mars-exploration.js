
const assert = require('assert')

function marsExploration (s) {

  let counter = 0

  for (let i = 0, len = s.length; i < len; i += 3) {
    
    if (s[i] !== 'S')
      counter++

    if (s[i+1] !== 'O')
      counter++
    
    if (s[i+2] !== 'S')
      counter++
  }

  return counter
}

assert.equal(marsExploration('SOSSPSSQSSOR'), 3)
assert.equal(marsExploration('SOSSOT'), 1)
assert.equal(marsExploration('SOSSOSSOS'), 0)
