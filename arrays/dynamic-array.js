
const assert = require('assert')

function dynamicArray (n, queries) {
  var lastAnswer = 0
  var seqList = []
  var seq, x, y
  var result = []

  for (let i = 0; i < n; i++)
    seqList.push([])
  
  for (let i = 0, len = queries.length; i < len; i++) {

    x = queries[i][1]
    y = queries[i][2]
    
    if (queries[i][0] === 1) {
      seqList[(x ^ lastAnswer) % n].push(y)
    } else {
      seq = seqList[(x ^ lastAnswer) % n]
      lastAnswer = seq[y % seq.length]
      result.push(lastAnswer)
    }
  }
  return result
}

assert.equal(
  dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ])
  .join(''),
  '73'
)
