
const assert = require('assert')

function decentNumber (n) {

  let output = ''

  while (n > 0) {

    if ((n % 3 === 0) || (n > 15)){

      output += '555'
      n -= 3

    } else if (n % 5 === 0) {

      output += '33333'
      n -= 5

    } else if (n > 5) {

      output += '555'
      n -= 3

    } else {

      return '-1'

    }
  }

  return output
}

assert.equal(decentNumber(3), '555')
assert.equal(decentNumber(4), '-1')
assert.equal(decentNumber(5), '33333')
assert.equal(decentNumber(6), '555555')
assert.equal(decentNumber(8), '55533333')
assert.equal(decentNumber(9), '555555555')
assert.equal(decentNumber(10), '3333333333')
assert.equal(decentNumber(11), '55555533333')
assert.equal(decentNumber(13), '5553333333333')
assert.equal(decentNumber(15), '555555555555555')
