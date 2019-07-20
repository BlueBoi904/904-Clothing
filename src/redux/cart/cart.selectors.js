import { createSelector } from "reselect";

// 2 types of selectors we could write.

// 1st type is an input selector, that doesn't use createSelector

// 2nd is output selector, which does use createSelector

// Input selector. Function that gets the hole state, and just returns a slice of it. Usually 1 layer deep.
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  // Collection of input selectors
  [selectCart],
  // Function which it's params are the return of collection input selectors in the same order
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
