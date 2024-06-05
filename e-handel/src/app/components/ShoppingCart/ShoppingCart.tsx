// src/app/components/ShoppingCart/ShoppingCart.tsx
'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';
import Link from 'next/link';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div className="p-8 bg-white shadow-2xl rounded-xl max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4">Varukorg</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Din varukorg är tom.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(product => (
              <div key={product.id} className="flex items-center border p-6 rounded-xl shadow-lg bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-1/4 flex justify-center">
                  <div className="relative h-36 w-36">
                    <Image src={product.image} alt={product.name} layout="fill" className="rounded-lg object-contain" />
                  </div>
                </div>
                <div className="w-3/4 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-700 mb-2 text-lg">{product.price} kr</p>
                  <div className="flex items-center mb-4">
                    <button onClick={() => removeFromCart(product.id)} className="px-3 py-1 bg-marsala text-white rounded-full hover:bg-red-700 transition-colors duration-300">-</button>
                    <span className="mx-4 text-gray-900 font-semibold text-lg">{product.quantity}</span>
                    <button onClick={() => addToCart(product)} className="px-3 py-1 bg-marsala text-white rounded-full hover:bg-green-700 transition-colors duration-300">+</button>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg">Totalt: {product.quantity * product.price} kr</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-auto bg-marsala text-white p-3 rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          {cart.length > 0 && (
            <div className="mt-10 flex justify-center">
              <Link href="/checkout" className="bg-marsala text-white py-4 px-12 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors duration-300">
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
