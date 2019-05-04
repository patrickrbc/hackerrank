
'use strict'

const assert = require('assert')

function plusMinus (arr) {
  
  let len = arr.length
  let pos, neg, zero
  pos = neg = zero = 0
  
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0)
      pos++
    else if (arr[i] < 0)
      neg++
    else
      zero++
  }

  console.log((pos/len).toFixed(6))
  console.log((neg/len).toFixed(6))
  console.log((zero/len).toFixed(6))
}

plusMinus([-4,3,-9,0,4,1])
