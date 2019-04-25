
const assert = require('assert')
const bigNum = require('bignumber.js')

function separateNumbers (s) {

  if (s[0] === 0)
    return 'NO'

  for (let i = 1, len = s.length/2; i <= len; i++) {

    let startingNumber = s.substring(0, i)

    for (let j = 0, len = s.length/2; j < len; j++) {

      let test = startingNumber
      let counter = new bigNum(startingNumber)

      while (test.length < s.length) {
        counter = new bigNum(counter).plus(1)
        test += counter
      }
      
      if (test === s)
        return 'YES ' + startingNumber
    }
  }

  return 'NO'
}

assert.equal(separateNumbers('99910001001'), 'YES 999')
assert.equal(separateNumbers('999100010001'), 'NO')
assert.equal(separateNumbers('7891011'), 'YES 7')
assert.equal(separateNumbers('9899100'), 'YES 98')
assert.equal(separateNumbers('1234'), 'YES 1')
assert.equal(separateNumbers('91011'), 'YES 9')
assert.equal(separateNumbers('99100'), 'YES 99')
assert.equal(separateNumbers('101103'), 'NO')
assert.equal(separateNumbers('010203'), 'NO')
assert.equal(separateNumbers('13'), 'NO')
assert.equal(separateNumbers('1'), 'NO')
assert.equal(separateNumbers('2'), 'NO')
assert.equal(separateNumbers('33'), 'NO')
assert.equal(separateNumbers('4445'), 'YES 44')
assert.equal(separateNumbers('8889'), 'YES 88')
assert.equal(separateNumbers('8910'), 'YES 8')
assert.equal(separateNumbers('00000000000000000000000000000000'), 'NO')
assert.equal(separateNumbers('11111111111111111111111111111111'), 'NO')
assert.equal(separateNumbers('10001001100210031004100510061007'), 'YES 1000')
assert.equal(separateNumbers('90071992547409929007199254740993'), 'YES 9007199254740992')
assert.equal(separateNumbers('96589218797811259658921879781126'), 'YES 9658921879781125')
