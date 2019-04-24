
const assert = require('assert')

function jimOrders (orders) {

  let results = []

  for (let i = 0, len = orders.length; i < len; i++)
    orders[i].push(i+1)

  orders.sort((x, y) => {
    if ( (x[0]+x[1]) > (y[0]+y[1]) ) {
      return 1
    } else if ( (x[0]+x[1]) < (y[0]+y[1]) ) {
      return -1
    } else {
      if (x[0] > y[0]) {
        return -1
      } else if (x[0] < y[0]) {
        return 1
      } else {
        return 0
      }
    }
  })

  for (let i = 0, len = orders.length; i < len; i++)
    results.push(orders[i][2])
  
  return results
}

assert.deepEqual(jimOrders([[8, 1], [4, 2], [5, 6], [3, 1], [4, 3]]), [4,2,5,1,3])
assert.deepEqual(jimOrders([[1, 3], [2, 3], [3, 3]]), [1,2,3])
assert.deepEqual(jimOrders([[1, 1], [1, 1]]), [1, 2])
