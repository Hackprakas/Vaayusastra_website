// AadharContext.js
"use client"

import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartIds, setcartIds] = useState([]);
 
  return (
    <CartContext.Provider value={{ cartIds, setcartIds }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;