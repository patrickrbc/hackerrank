
'use strict'

const assert = require('assert')

function print (arr) {
  console.log(arr.join(' '))
}

function insertionSort1 (n, arr) {

  let toInsert = arr[n-1]

  for (let i = n - 2; i >= 0; i--) {

    if (arr[i] >= toInsert) {
      arr[i+1] = arr[i]
      print(arr)

      if (i === 0) {
        arr[i] = toInsert
        print(arr)
      }
    } else {
      arr[i+1] = toInsert
      print(arr)
      break
    }
  }
}

insertionSort1(5, [2,4,6,8,3])
console.log('\n')
insertionSort1(5, [1,2,4,5,3])
console.log('\n')
insertionSort1(10, [2,3,4,5,6,7,8,9,10,1])
