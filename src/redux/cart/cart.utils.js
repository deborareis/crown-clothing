export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    //! Using MAP to return a NEW array so the app re renders everything properly
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  //! When the item is added for the first time (not going through the IF above) the quantity property is attached to the item object.
};
