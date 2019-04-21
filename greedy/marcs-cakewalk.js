
const assert = require('assert')

function marcsCakewalk (calorie) {

  let sum = 0

  calorie.sort((x, y) => x > y ? -1 : 1)

  for (let i = 0, len = calorie.length; i < len; i++)
    sum += Math.pow(2, i) * calorie[i]

  return sum
}

assert.equal(marcsCakewalk([7, 4, 9, 6]), 79)
assert.equal(marcsCakewalk([1, 3, 2]), 11)
assert.equal(marcsCakewalk([504,378,291,380,728,630,797,212,32,792,895,635,850,853,859,127,653,655,476,748]), 124138217)
