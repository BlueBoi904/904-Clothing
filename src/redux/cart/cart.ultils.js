export const addItemToCart = (cartItems, cartItemToAdd) => {
    // Look inside of our existing cart items to see if that item already exists
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );
    //find() will return the first item found in the array
    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}