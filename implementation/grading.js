
'use strict'

const assert = require('assert')

function nextMultiple (n, i) {
  while (++n % i !== 0);
  return n
}

function gradingStudents (grades) {
  return grades.map(x => {
    if (x < 38)
      return x

    if (Math.abs(x - nextMultiple(x, 5)) < 3)
      return nextMultiple(x, 5)

    return x
  })
}

assert.equal(nextMultiple(73, 5), 75)
assert.deepEqual(gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33])
