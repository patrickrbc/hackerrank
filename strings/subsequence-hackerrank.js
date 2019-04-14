
const assert = require('assert')

function hackerrankInString (s) {

  const target = 'hackerrank'
  var cur = 0

  for (let i = 0, len = target.length; i < len; i++) {

    if (cur >= s.length)
      return 'NO'

    for (let j = cur, len = s.length; j < len; j++) {

      if (target[i] === s[j]) {
        cur = j + 1
        break
      }

      if (j === len - 1)
        return 'NO'

      cur = j
    }

    if (i === len - 1)
      return 'YES'
  }

  return 'NO'
}

assert.equal(hackerrankInString('hereiamstackerrank'), 'YES')
assert.equal(hackerrankInString('hhaacckkekraraannk'), 'YES')
assert.equal(hackerrankInString('hackerworld'), 'NO')
assert.equal(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'), 'NO')
assert.equal(hackerrankInString('knarrekcah'), 'NO')
assert.equal(hackerrankInString('hackerrank'), 'YES')
assert.equal(hackerrankInString('hackeronek'), 'NO')
assert.equal(hackerrankInString('hhhhaaaaackkkkerrrrrrrrank'), 'YES')
assert.equal(hackerrankInString('hhhackkerbanker'), 'NO')
