// src/app/(static)/checkout/page.tsx
'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Checkout = () => {
  const { cart, setCart } = useCart();
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const [form, setForm] = useState({ name: '', address: '', email: '', paymentMethod: 'card', deliveryMethod: 'standard' });
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setCart([]);  // Töm varukorgen
    localStorage.setItem('cart', JSON.stringify([]));  // Uppdatera lokal lagring
    router.push('/checkout/confirmation');
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Kassa</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {cart.map(product => (
              <div key={product.id} className="relative border p-4 rounded-lg shadow-sm">
                <Image src={product.image} alt={product.name} width={100} height={100} className="mb-4" />
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.price} kr</p>
                <p className="text-gray-700 mb-4">Antal: {product.quantity}</p>
                <p className="text-gray-700 mb-4">Totalt: {product.price * product.quantity} kr</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4">Total pris: {totalPrice} kr</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Namn</label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700">Adress</label>
                <input
                  type="text"
                  id="address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="paymentMethod" className="block text-gray-700">Betalningsmetod</label>
                <select
                  id="paymentMethod"
                  value={form.paymentMethod}
                  onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                >
                  <option value="card">Kreditkort</option>
                  <option value="paypal">PayPal</option>
                  <option value="invoice">Faktura</option>
                </select>
              </div>
              <div>
                <label htmlFor="deliveryMethod" className="block text-gray-700">Leveransmetod</label>
                <select
                  id="deliveryMethod"
                  value={form.deliveryMethod}
                  onChange={(e) => setForm({ ...form, deliveryMethod: e.target.value })}
                  className="mt-1 block w-full p-2 border rounded"
                  required
                >
                  <option value="standard">Standard</option>
                  <option value="express">Express</option>
                </select>
              </div>
              <button type="submit" className="bg-marsala text-white py-2 px-4 rounded mt-4">
                Slutför köp
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
