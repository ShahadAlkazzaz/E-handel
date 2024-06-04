// src/app/components/ShoppingCart/ShoppingCart.tsx
'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Varukorg</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cart.map(product => (
              <div key={product.id} className="relative border p-4 rounded-lg shadow-sm">
                <Image src={product.image} alt={product.name} width={100} height={100} className="mb-4" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price} kr</p>
                <div className="flex items-center mb-4">
                  <button onClick={() => removeFromCart(product.id)} className="px-2 py-1 bg-red-500 text-white rounded">-</button>
                  <span className="mx-2">{product.quantity}</span>
                  <button onClick={() => addToCart(product)} className="px-2 py-1 bg-green-500 text-white rounded">+</button>
                </div>
                <p className="text-gray-700 mb-4">Totalt: {product.quantity * product.price} kr</p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="mt-4">
              <Link href="/checkout" className="bg-marsala text-white py-2 px-4 rounded inline-block">
                Gå till kassan
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
