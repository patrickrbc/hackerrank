
const assert = require('assert')

function checkMagazine (magazine, note) {
  var hash = {}

  for (let i = 0, len = magazine.length; i < len; i++) {
    if (hash[magazine[i]])
      hash[magazine[i]]++
    else
      hash[magazine[i]] = 1
  }

  for (let i = 0, len = note.length; i < len; i++) {
    if (hash[note[i]])
      hash[note[i]]--
    else
      return 'No'
  }

  return 'Yes'
}

assert.equal(checkMagazine(['give','me','one','grand','today','night'],['give','one','grand','today']), 'Yes')
assert.equal(checkMagazine(['two','times','three','is','not','four'],['two','times','two','is','four']), 'No')
