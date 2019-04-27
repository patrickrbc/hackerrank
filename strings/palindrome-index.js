
const assert = require('assert')

function isPalindrome (s) {

  let s1, s2

  s1 = s.slice(0, s.length/2)

  if (s.length % 2 !== 0)
    s2 = s.slice(s.length/2 + 1, s.length)
  else
    s2 = s.slice(s.length/2, s.length)

  if (s1.length !== s2.length)
    return false

  return s1 === s2.split('').reverse().join('')
}

function palindromeIndex (s) {

  let alphabet = new Array(26)
  let alteredString, toRemove

  let s1, s2, aux

  if (isPalindrome(s))
    return -1

  for (let i = 0, j = s.length - 1; i < s.length && j >= 0; i++, j--) {

    if (s[i] === s[j])
      continue

    aux = s.split('')
    aux.splice(i, 1)
    aux = aux.join('')

    if (isPalindrome(aux))
      return i

    aux = s.split('')
    aux.splice(j, 1)
    aux = aux.join('')

    return isPalindrome(aux) ? j : -1
  }
}

assert.equal(palindromeIndex('aaab'), 3)
assert.equal(palindromeIndex('baa'), 0)
assert.equal(palindromeIndex('aaa'), -1)
assert.equal(palindromeIndex('quyjjdcgsvvsgcdjjyq'), 1)
assert.equal(palindromeIndex('hgygsvlfwcwnswtuhmyaljkqlqjjqlqkjlaymhutwsnwcflvsgygh'), 8)
assert.equal(palindromeIndex('fgnfnidynhxebxxxfmxixhsruldhsaobhlcggchboashdlurshxixmfxxxbexhnydinfngf'), 33)
assert.equal(palindromeIndex('bsyhvwfuesumsehmytqioswvpcbxyolapfywdxeacyuruybhbwxjmrrmjxwbhbyuruycaexdwyfpaloyxbcpwsoiqtymhesmuseufwvhysb'), 23)
assert.equal(palindromeIndex('fvyqxqxynewuebtcuqdwyetyqqisappmunmnldmkttkmdlnmnumppasiqyteywdquctbeuwenyxqxqyvf'), 25)
assert.equal(palindromeIndex('mmbiefhflbeckaecprwfgmqlydfroxrblulpasumubqhhbvlqpixvvxipqlvbhqbumusaplulbrxorfdylqmgfwrpceakceblfhfeibmm'), 44)
assert.equal(palindromeIndex('tpqknkmbgasitnwqrqasvolmevkasccsakvemlosaqrqwntisagbmknkqpt'), 20)
assert.equal(palindromeIndex('lhrxvssvxrhl'), -1)
assert.equal(palindromeIndex('prcoitfiptvcxrvoalqmfpnqyhrubxspplrftomfehbbhefmotfrlppsxburhyqnpfmqlaorxcvtpiftiocrp'), 14)
assert.equal(palindromeIndex('kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk'), -1)
