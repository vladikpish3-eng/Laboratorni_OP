function sum(...args) {
  return args.reduce((result, num) => {
    return result + num
  }, 0)
}

console.log(sum(1, 10, 3))
