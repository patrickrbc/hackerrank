
const assert = require('assert')

function hourglassSum (arr) {

  var sums = [], sum

  for (var i = 0, len = 4; i < len; i++) {
    for (var j = 0, len = 4; j < len; j++) {

      // hourglass sum
      sum = arr[i][j+0] + arr[i][j+1] + arr[i][j+2] +
                      arr[i+1][j+1] +
        arr[i+2][j+0] + arr[i+2][j+1] + arr[i+2][j+2]

      sums.push(sum)
    }
  }

  return sums.reduce((x, y) => x > y ? x : y)
}

assert.equal(hourglassSum([ [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ] ]), 19)
