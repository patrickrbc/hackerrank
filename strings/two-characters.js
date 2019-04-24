
const assert = require('assert')

function alternate (s) {

  if (s.length <= 1)
    return 0

  let track = new Array(26).fill(0)
    .map(x => new Array(26).fill(0))

  let count = new Array(26).fill(0)
    .map(x => new Array(26).fill(0))
  
  let max

  for (let i = 0, len = s.length; i < len; i++) {

    let code = s[i].charCodeAt(0) - 97

    for (let j = 0; j < 26; j++) {
      if (track[code][j] === s[i]) {
        count[code][j] = -1
      }

      if (count[code][j] !== -1) {
        track[code][j] = s[i]
        count[code][j]++
      }
    }
    
    for (let j = 0; j < 26; j++) {
      if (track[j][code] === s[i]) {
        count[j][code] = -1
      }

      if (count[j][code] !== -1) {
        track[j][code] = s[i]
        count[j][code]++
      }
    }
  }
  
  max = 0
  for (let i = 0; i < 26; i++)
    for (let j = 0; j < 26; j++)
      max = Math.max(max, count[i][j])

  return max
}

assert.equal(alternate('beabeefeab'), 5)
assert.equal(alternate('abaacdabd'), 4)
assert.equal(alternate('asdcbsdcagfsdbgdfanfghbsfdab'), 8)
assert.equal(alternate('asvkugfiugsalddlasguifgukvsa'), 0)
