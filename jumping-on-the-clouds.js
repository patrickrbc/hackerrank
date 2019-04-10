function jumpingOnClouds(c) {
  var steps = 0, i = 0

  while (i < (c.length - 1)) {
    if (c[i+2] === 1) {
      i++
    } else {
      i += 2
    }
    steps++
  }
  return steps
}

/*
 * input
 * 7
 * 0 0 1 0 0 1 0
 *
 * output
 * 4
 */
