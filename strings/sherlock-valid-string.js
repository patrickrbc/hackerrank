
const assert = require('assert')

/*
 * Sherlock considers a string to be valid if all characters of the string
 * appear the same number of times. It is also valid if he can remove just
 * character at index in the string, and the remaining characters will occur
 * the same number of times
 */
function isValid (s) {
  var alphabet = new Array(26)
  var charIndex
  var reps, flag

  for (let i = 0, len = alphabet.length; i < len; i++)
    alphabet[i] = 0

  for (let i = 0, len = s.length; i < len; i++) {
    charIndex = s[i].charCodeAt(0) - 97
    alphabet[charIndex] += 1
  }

  for (let i = 0, len = alphabet.length; i < len; i++) {
    if (!reps)
      reps = alphabet[i]

    if (alphabet[i] && (alphabet[i] !== reps)) {
      if (flag)
        return 'NO'
      else
        flag = true
    }
  }

  return 'YES'
}

assert.equal(isValid('aabbcd'), 'NO')
assert.equal(isValid('aabbccddeefghi'), 'NO')
assert.equal(isValid('abcdefghhgfedecba'), 'YES')
assert.equal(isValid('aaaabbcc'), 'NO')
assert.equal(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'), 'YES')
