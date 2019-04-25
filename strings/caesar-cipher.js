
const assert = require('assert')

function rotate (letter, k) {

  if (letter >= 65 && letter <= 90) {
    letter = (letter - 65 + k) % 26 + 65
  } else if (letter >= 97 && letter <= 122) {
    letter = (letter - 97 + k) % 26 + 97
  }

  return String.fromCharCode(letter)
}

function caesarCipher (s, k) {

  s = s.split('')
  for (let i = 0, len = s.length; i < len; i++)
    s[i] = rotate(s[i].charCodeAt(0), k)
  
  return s.join('')
}

assert.equal(caesarCipher('middle-Outz', 2), 'okffng-Qwvb')
