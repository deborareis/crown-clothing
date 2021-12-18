import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

//! Actions can have a TYPE value and a PAYLOAD value
// ? The PAYLOAD value can be ANYTHING we want it to be. In this case we want it to be the item we want to add in the cart
