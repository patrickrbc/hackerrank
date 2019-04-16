
const assert = require('assert')

function fibonacci (n) {
  return (n === 0 || n === 1) ? n : fibonacci(n-1) + fibonacci(n-2)
}

assert.equal(fibonacci(2), 1)
assert.equal(fibonacci(3), 2)
assert.equal(fibonacci(4), 3)
assert.equal(fibonacci(5), 5)
assert.equal(fibonacci(6), 8)
