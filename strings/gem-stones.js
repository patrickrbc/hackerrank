
const assert = require('assert')

function gemstones (arr) {

  let hashMap = {}
  let gemstones = 0

  for (let i = 0, len = arr.length; i < len; i++) {

    for (let j = 0, len = arr[i].length; j < len; j++) {
      if (hashMap[arr[i][j]] && hashMap[arr[i][j]] < (i+1))
        hashMap[arr[i][j]]++
      else if (i === 0)
        hashMap[arr[i][j]] = 1
    }
    
    for (let j in hashMap) {
      if (hashMap[j] < (i+1))
        hashMap[j] = 0
    }
  }

  for (let j in hashMap)
    if (hashMap[j])
      gemstones++

  return gemstones
}

assert.equal(gemstones(['abcdde', 'baccd', 'eeabg']), 2)
assert.equal(gemstones(['basdfj','asdlkjfdjsa','bnafvfnsd','oafhdlasd']), 4)
