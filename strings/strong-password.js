
const assert = require('assert')

function minimumNumber (n, password) {

  let missingLength = 0, missingConstraints = 0, sizeOk

  let constraints = {
    numbers: false,
    lowerCase: false,
    upperCase: false,
    specialChar: false,
  }

  let universe = {
    numbers: '0123456789',
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    specialChar: '!@#$%^&*()-+'
  }

  if (password.length > 6)
    sizeOk = true
  else
    missingLength = 6 - password.length

  for (let i = 0, len = password.length; i < len; i++) {
    for (let j in universe) {
      if (universe[j].indexOf(password[i]) !== -1)
        constraints[j] = true
    }
  }

  for (let i in constraints)
    if (!constraints[i])
      missingConstraints++
  
  return missingLength > missingConstraints ? missingLength : missingConstraints
}

assert.equal(minimumNumber(3, 'Ab1'), 3)
assert.equal(minimumNumber(11, '#HackerRank'), 1)
assert.equal(minimumNumber(3, '790'), 3)
