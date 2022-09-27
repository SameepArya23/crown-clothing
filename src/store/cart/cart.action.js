import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, ...productToAdd, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((items) => items.id !== productToRemove.id);
  }

  return cartItems.map((items) =>
    items.id === productToRemove.id
      ? { ...items, quantity: items.quantity - 1 }
      : items
  );
};

const clearCartItem = (cartItems, productToRemove) =>
  cartItems.filter((items) => items.id !== productToRemove.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
