import { createContext, useState, useEffect } from "react";

export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, productToRemove) => {
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

export const clearCartItem = (cartItems, productToRemove) =>
  cartItems.filter((items) => items.id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  totalPrice: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newPriceCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartCount(newCartCount);
    setTotalPrice(newPriceCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const removeItemFromCart = (productToRemove) =>
    setCartItems(removeCartItem(cartItems, productToRemove));

  const clearItemFromCart = (productToRemove) =>
    setCartItems(clearCartItem(cartItems, productToRemove));

  const Value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    totalPrice,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={Value}>{children}</CartContext.Provider>;
};
