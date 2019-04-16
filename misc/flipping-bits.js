
const assert = require('assert')

function flippingBits (N) {

  N = parseInt(N, 10).toString(2)

  while (N.length < 32)
    N = '0' + N

  N = N.split('')

  for (let i = 0, len = N.length; i < len; i++)
    N[i] = (N[i] === '0') ? '1' : '0'

  N = N.join('')

  return parseInt(N, 2)
}

assert.equal(flippingBits(802743475), 3492223820)
assert.equal(flippingBits(0), 4294967295)
assert.equal(flippingBits(35601423), 4259365872)
