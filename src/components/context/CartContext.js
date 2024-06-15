import { createContext, useState } from "react";

export const CartContext = createContext();

export const ContextProvier = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exisitingProduct = cart.findIndex((item) => item.id === product.id);
    if (exisitingProduct !== -1) {
      const updatedCart = [...cart];
      updatedCart[exisitingProduct].price += product.price;
      setCart(updatedCart);
    } else {
      setCart((prev) => [product, ...prev]);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
