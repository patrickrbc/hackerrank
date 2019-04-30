
'use strict'

const assert = require('assert')

function insert (index, arr) {

  for (let i = 0; i < index; i++)
    if (arr[i] > arr[index])
      [ arr[i], arr[index] ] = [ arr[index], arr[i] ]
  console.log(arr.join(' '))
  return arr
}

function insertionSort2 (n, arr) {
  for (let i = 1, len = arr.length; i < len; i++)
    arr = insert(i, arr)
}

insertionSort2(6, [1,4,3,5,6,2])
insertionSort2(7, [3,4,7,5,6,2,1])
