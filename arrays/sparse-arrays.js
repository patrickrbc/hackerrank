const assert = require('assert')

assert.equal(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']).join(''), '210')

function matchingStrings(strings, queries) {
    
  var results = [], matches

  strings = ',' + strings.join(',,') + ','

  for (let i = 0, len = queries.length; i < len; i++) {
    matches = strings.match(RegExp(',' + queries[i] + ',', 'g'))
    results.push(matches ? matches.length : 0)
  }

  return results
}
