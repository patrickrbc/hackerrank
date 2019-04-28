'use strict'

const assert = require('assert')

function missingNumbers (arr, brr) {

  let alphabet = {}
  let result = []

  for (let i = 0, len = brr.length; i < len; i++) {
    if (alphabet[brr[i]])
      alphabet[brr[i]]++
    else
      alphabet[brr[i]] = 1
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    if (alphabet[arr[i]])
      alphabet[arr[i]]--
    else
      alphabet[arr[i]] = -1
  }

  for (let i in alphabet)
    if (alphabet[i])
      result.push(i)

  return result
}

assert.deepEqual(missingNumbers(
  [203,204,205,206,207,208,203,204,205,206],
  [203,204,204,205,206,207,205,208,203,206,205,206,204]
), [204,205,206])
