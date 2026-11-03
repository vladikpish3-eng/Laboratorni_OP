function sum(...args) {
  let result = 0
  let i = 0

  if (args.length === 0) {
    return 0
  }
  do {
    result += args[i]
    i++
  } while (i < args.length)
  return result
}

console.log(sum(1, 2, -5))
console.log(sum())