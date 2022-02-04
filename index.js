// Modifying an array Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and returns the array. If the array length is less than five it return ‘item not found’.

// console.log(modifyArray(["Avocado", "Tomato", "Potato","Mango", "Lemon","Carrot"]);
// // →["Avocado", "Tomato", "Potato","Mango", "LEMON", "Carrot"]
// console.log(modifyArray(["Google", "Facebook","Apple", "Amazon","Microsoft",  "IBM"]);
// // →["Google", "Facebook","Apple", "Amazon","MICROSOFT",  "IBM"]
// console.log(modifyArray(["Google", "Facebook","Apple", "Amazon"]);
// // →"Not Found"
const modifyArray = (arr) => {
  let newArr = []

  if (arr.length < 5) {
    newArr.push('Not Found')
  } else {
    arr.splice(4, 1, arr[4].toUpperCase())
    newArr.push(arr)
    // newArr.push(arr[0], arr[1], arr[2], arr[3], arr[4].toUpperCase(), arr[5])
  }

  return newArr
}

console.log(
  modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'])
)
