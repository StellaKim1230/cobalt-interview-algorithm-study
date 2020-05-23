const search = (inputString, searchString) => {
  // 검색할 문자열 길이가 input 문자열 길이보다 크면 false 반환
  if (inputString.length < searchString.length) return false

  //  input 문자열과 검색할 문자열이 같으면 true 반환
  if (inputString === searchString) return true

  // inputString, searchString 을 배열로 만든다
  const inputArray = inputString.split('')
  const searchArray = searchString.split('')

  // searchArray 0번째의 값이 inputArray 에 없으면 false 반환
  if (!inputArray.includes(searchArray[0])) return false

  // searchArray 0번째의 값을 inputArray 에서 index를 찾는다 (firstSearchIndex)
  const firstSearchIndex = inputArray.indexOf(searchArray[0])
  // sliceInputArray에 inputArray의 값중 0번째부터 firstSearchIndex 전까지의 자른 값을 담는다
  const sliceInputArray = inputArray.slice(0, firstSearchIndex)
  // inputArray는 splice 함수를 이용하여 위의 slice 한 값들을 제거한다.
  inputArray.splice(0, firstSearchIndex)

  // 비교할 새로운 array를 만든다.
  const resultInputArray = inputArray.concat(sliceInputArray)

  // 새로 만든 resultInputArray를 string으로 만든 후 searchString가 존재하는지 확인한다.
  if (resultInputArray.join('').includes(searchString)) return true
  if (!resultInputArray.join('').includes(searchString)) return false
}

console.log(search('ABCD', 'ABC')) // true
console.log(search('ABCD', 'EFG')) // false
console.log(search('ABCD', 'BC')) // true
console.log(search('ABCD', 'DAB')) // true
console.log(search('ABCD', 'CDAB')) // true
console.log(search('ABCD', 'CDABC')) // false
console.log(search('ABCDEFG', 'DFSFD')) // false
console.log(search('ABCDEFG', 'EFGAB')) // true
console.log(search('ABCDEFG', 'BCDEFGA')) // true
console.log(search('ABCDEFG', 'CDEFGAB')) // true
