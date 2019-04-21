
const assert = require('assert')

function max (a, b) { return a > b ? a : b }

function candies (n, arr) {

  let sum = 0
  let cur, hasPrevious, hasNext
  let res = []

  for (let i = 0; i < n; i++) {

    hasPrevious = (i - 1) >= 0
    hasNext = (i + 1) < n

    if (hasPrevious && (arr[i] > arr[i-1]))
      res.push(res[i-1] + 1)
    else
      res.push(1)

    sum += cur
  }

  for (let i = arr.length - 1; i >= 0; i--) {

    hasPrevious = (i - 1) >= 0
    hasNext = i < arr.length

    if (hasNext && arr[i] > arr[i+1])
      res[i] = max(res[i], res[i+1] + 1)
  }

  return res.reduce((x, y) => x + y)
}

assert.equal(candies(3, [1, 2, 2]), 4)
assert.equal(candies(10, [2, 4, 2, 6, 1, 7, 8, 9, 2, 1]), 19)
assert.equal(candies(8, [2, 4, 3, 5, 2, 6, 4, 5]), 12)

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
      inputString += inputStdin;
});

process.stdin.on('end', function() {
      inputString = inputString.replace(/\s*$/, '')
          .split('\n')
          .map(str => str.replace(/\s*$/, ''));

      main();
});

function readLine() {
      return inputString[currentLine++];
}



function main() {
      const ws = fs.createWriteStream('output');

      const n = parseInt(readLine(), 10);

      let arr = [];

      for (let i = 0; i < n; i++) {
                const arrItem = parseInt(readLine(), 10);
                arr.push(arrItem);
            }

      const result = candies(n, arr);

      ws.write(result + '\n');

      ws.end();
}

