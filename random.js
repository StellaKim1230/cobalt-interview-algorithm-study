// 0 부터 파라미터로 받은 number 사이의 랜덤값을 리턴하는 함수
const getRandom = (number) => {
  return Math.floor(Math.random() * number)
}

console.log(getRandom(5)) // random 0 ~ 4 return
console.log(getRandom(10)) // random 0 ~ 9 return

// Math.random()은 0 ~ 1 사이의 값을 랜덤으로 부동소수점을 반환한다.
// Math.random()에 number을 곱해주면, 0 ~ number 사의의 값을 부동 소수점으로 반환한다.
// 위 값의 소수점을 버림하면 들어온 number을 기준으로 0 ~ number-1 사이의 랜덤값을 리턴하게 된다.
