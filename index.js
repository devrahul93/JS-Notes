let arr = [1, 2, 3, 4, 5]

function shuffle(array) {
  let newArr = array.sort(() => Math.random() - 0.5)
  return newArr
}

console.log(shuffle(arr))
