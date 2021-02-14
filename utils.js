// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
  // should return the area
}

const perimeter = (w, h) => {
  return 2 * w + 2 * h
  // should return the perimeter
}

const circleArea = r => {
  return 3.14 * r * r
  // should return the area of the circle
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  for (cartItem of shoppingCart) {
    if (cartItem.name === item.name) {
      cartItem.quantity += item.quantity
      return
    }
  }
  shoppingCart.push(item)
}

const getNumItemsInCart = () => {
  let total = 0
  for (item of shoppingCart) {
    total += item.quantity
  }
  return total
}

const removeItemFromCart = (item) => {
  for (cartItem of shoppingCart) {
    if (cartItem.name === item.name) {
      shoppingCart.pop(cartItem)
      return
    }
  }
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
