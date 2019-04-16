

function countSwaps (a) {
  var swaps = 0
  var isSorted = false

  while (!isSorted) {
    isSorted = true

    for (let i = 0, len = a.length - 1; i < len; i++) {
      if (a[i] > a[i+1]) {
        [ a[i], a[i+1] ] = [ a[i+1], a[i] ]
        swaps++
        isSorted = false
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length-1]}`)
}

countSwaps([1,2,3])
countSwaps([3,2,1])
