
const assert = require('assert')

function superReducedString (s) {

  let done

  if (s.length === 1)
    return s

  s = s.split('')

  while (!done) {

    done = true

    for (let i = 1, len = s.length; i < len; i++) {
      if (s[i] === s[i-1]) {
        done = false
        s.splice(i-1, 2)
      }
    }
  }
  
  if (!s.length)
    return 'Empty String'
  else
    return s.join('')
}

assert.equal(superReducedString('aaabccddd'), 'abd')
assert.equal(superReducedString('aa'), 'Empty String')
assert.equal(superReducedString('baab'), 'Empty String')
assert.equal(superReducedString('baabb'), 'b')
assert.equal(superReducedString('baabbab'), 'bab')
assert.equal(superReducedString('bbbbbbbbbbabbbb'), 'a')
