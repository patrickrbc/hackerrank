function sockMerchant(n, ar) {
  var count = {}
  var pairs = 0

  for (var i = 0, len = ar.length; i < len; i++)
    count[ar[i]] = count[ar[i]] ? count[ar[i]] + 1 : 1

  for (var i in Object.keys(count))
    pairs += Math.floor(Object.values(count)[i] / 2)

  return pairs
}
