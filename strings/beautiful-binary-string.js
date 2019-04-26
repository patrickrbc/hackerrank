
const assert = require('assert')

function beautifulBinaryString (b) {
  return (b.match(/010/g) || []).length
}

assert.equal(beautifulBinaryString('0100101010'), 3)
assert.equal(beautifulBinaryString('01100'), 0)
assert.equal(beautifulBinaryString('01001010'), 2)
assert.equal(beautifulBinaryString('0101010'), 2)
assert.equal(beautifulBinaryString('0100101010100010110100100110110100011100111110101001011001110111110000101011011111011001111100011101'), 10)

