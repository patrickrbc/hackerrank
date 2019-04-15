function miniMaxSum (arr) {
  arr.sort()

  var max = arr.slice(0, 4).reduce((x, y) => x + y)
  var min = arr.slice(1, 5).reduce((x, y) => x + y)

  console.log(max, min)
}

miniMaxSum([1, 2, 3, 4, 5])
// Expected to print "10 14"
