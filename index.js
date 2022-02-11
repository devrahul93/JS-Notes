//The following shopping cart has four products. Create an addProduct, removeProduct ,editProduct , removeAll functions to modify the shopping cart.

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

function addProduct(product) {
  shoppingCart.push(product)
  return shoppingCart
}

addProduct('Meat')
// ["Milk", "Coffee", "Tea", "Honey", "Meat"]

function editProduct(position, product) {
  shoppingCart.splice(position, 1, product)
  return shoppingCart
}

editProduct(3, 'Sugar')
// ["Milk", "Coffee", "Tea", "Sugar", "Meat"]

function removeProduct(num) {
  shoppingCart.splice(num, 1)
  return shoppingCart
}

removeProduct(0)
// ["Coffee", "Tea", "Sugar", "Meat"]

removeProduct(3)
// ["Coffee", "Tea", "Sugar"]
