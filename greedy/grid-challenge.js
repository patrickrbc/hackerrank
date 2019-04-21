
const assert = require('assert')

function gridChallenge (grid) {

  for (let i = 0, len = grid.length; i < len; i++)
    grid[i] = grid[i].split('').sort()

  for (let j = 0, len = grid[0].length; j < len; j++)
    for (let i = 0, len = grid.length - 1; i < len; i++)
      if (grid[i][j] > grid[i+1][j])
        return 'NO'

  return 'YES'
}

assert.equal(gridChallenge([
  'ebacd',
  'fghij',
  'olmkn',
  'trpqs',
  'xywuv'
]), 'YES')
