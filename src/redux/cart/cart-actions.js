import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
// Actions can have a type, and payload
export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

// Add items function gets the item, and generates a new action with the action type of ADD_ITEM.