// CartContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

// Define types for context value and props if necessary
interface CartContextProps {
  children: ReactNode; // ReactNode type allows any valid JSX to be passed as children
}

interface CartContextValue {
  cartIds: string; // Example type for cartIds, adjust as per your application
  setCartIds: React.Dispatch<React.SetStateAction<string>>; // Type for setCartIds function
}

// Create context with initial values/types
const CartContext = createContext<CartContextValue>({
  cartIds: "",
  setCartIds: () => {},
});

export const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartIds, setCartIds] = useState<string>(""); // Initialize cartIds as an array of strings

  return (
    <CartContext.Provider value={{ cartIds, setCartIds }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
