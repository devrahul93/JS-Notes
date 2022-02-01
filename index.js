// Declare a function called listShoppingItems, it takes your shopping basket array you declared at question 4 as a parameter and it prints out the capitalized shopping items.

const list = ['Banana', 'Tomato', 'Milk', 'Egg']

let listShoppingItems = (list) => {
  let arr = []

  list.forEach((element) => arr.push(element.toUpperCase()))
  return arr.toString()
}

console.log(listShoppingItems(list))
listShoppingItems(list)
// BANANA
// TOMATO
// MILK
// EGG
