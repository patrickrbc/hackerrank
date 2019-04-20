
const assert = require('assert')

function luckBalance (k, contests) {

  contests.sort((x, y) => x[0] > y[0] ? 1 : -1)

  var luckSum    = 0
  var importants = 0

  for (let i = contests.length - 1; i >= 0; i--) {

    if (contests[i][1]) {

      if (importants >= k)
        luckSum -= contests[i][0]
      else
        luckSum += contests[i][0]

      importants++

    } else {
      luckSum += contests[i][0]
    }
  }

  return luckSum
}

assert.equal(luckBalance(3,[[5,1],[2,1],[1,1],[8,1],[10,0],[5,0]]),29)
assert.equal(luckBalance(5,[[13,1],[10,1],[9,1],[8,1],[13,1],[12,1],[18,1],[13,1]]),42)
assert.equal(luckBalance(2,[[5,1],[4,0],[6,1],[2,1],[8,0]]), 21)
