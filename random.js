const getZeroOrOne = () => {
  return Math.round(Math.random())
}

const getRandom = (number) => {
  var arr = []

  for (let i = 0; i <= number; i++) {
    arr.push(parseInt(getBinary(Math.round(i / 2)), 2))
  }

  return arr
}

const getBinary = (times) => {
  var string = ''

  if (times === 0) return getZeroOrOne()

  for (let i = 1; i <= times; i++) {
    string += getZeroOrOne()
  }

  return parseInt(string, 10)
}

const resultRandom = (number) => {
  const result = getRandom(number)

  return result.sort(() => {
    return 0.5 - Math.random()
  })
}

console.log(resultRandom(5))
