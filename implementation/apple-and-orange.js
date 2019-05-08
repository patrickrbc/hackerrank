
'use strict'

function inSamsHouse (s, t, treePosition, d) {
  return ((treePosition + d) >= s) && ((treePosition + d) <= t)
}

function countApplesAndOranges (s, t, a, b, apples, oranges) {
  
  let countApples = 0, countOranges = 0

  for (let i = 0, len = apples.length; i < len; i++) {
    if (inSamsHouse(s, t, a, apples[i]))
      countApples++
  }
  console.log(countApples)

  for (let i = 0, len = oranges.length; i < len; i++) {
    if (inSamsHouse(s, t, b, oranges[i]))
      countOranges++
  }
  console.log(countOranges)
}

countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [5,-6])
countApplesAndOranges(7, 10, 4, 12, [2,3,-4], [3,-2,-4])
