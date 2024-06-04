// src/app/context/CartContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../../types/Product';

interface CartContextProps {
  cart: Product[];
  setCart: (cart: Product[]) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(p => p.id === product.id);
      if (existingProduct) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price } : p
        );
      }
      return [...prevCart, { ...product, quantity: 1, total: product.price }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(p => p.id === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map(p =>
          p.id === productId ? { ...p, quantity: p.quantity - 1, total: (p.quantity - 1) * p.price } : p
        );
      }
      return prevCart.filter(p => p.id !== productId);
    });
  };

  const cartCount = cart.reduce((count, product) => count + product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
