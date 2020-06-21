const getZeroOrOne = () => {
  return Math.round(Math.random())
}

const getRandom = (number) => {
  var arr = []
  const count = Math.round(number / 2)

  for (let i = 0; i < number; i++) {
    var string = ''

    for (let j = 0; j < count; j++) {
      string += getZeroOrOne()
    }

    if (parseInt(string, 2) <= 5) {
      arr.push(parseInt(string, 2))
    }
  }

  return arr
}

console.log(getRandom(5))
