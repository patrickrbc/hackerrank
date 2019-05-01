
'use strict'

const assert = require('assert')

function quickSort (arr) {

  let left = []
  let right = []
  let equal = []

  for (let i = 0, len = arr.length; i < len; i++) {

    if (arr[i] > arr[0]) {
      right.push(arr[i])
    } else if (arr[i] < arr[0]) {
      left.push(arr[i])
    } else {
      equal.push(arr[i])
    }
  }

  return left.concat(equal).concat(right)
}

console.log(quickSort([4,5,3,7,2]))
