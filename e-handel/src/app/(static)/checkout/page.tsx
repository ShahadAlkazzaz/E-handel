// src/app/(static)/checkout/page.tsx
'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link'; // Import Link from 'next/link'

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
    <div className="p-8 bg-white shadow-2xl rounded-xl max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b pb-4 text-center">Kassa</h2>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <div className="space-y-6 mb-8">
              {cart.map(product => (
                <div key={product.id} className="flex flex-col md:flex-row items-center border p-6 rounded-xl shadow-lg bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
                  <div className="w-full md:w-1/4 flex justify-center">
                    <div className="relative h-36 w-36">
                      <Image src={product.image} alt={product.name} layout="fill" className="rounded-lg object-contain" />
                    </div>
                  </div>
                  <div className="w-full md:w-3/4 pl-0 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-gray-700 mb-2 text-lg">{product.price} kr</p>
                    <p className="text-gray-700 mb-2 text-lg">Antal: {product.quantity}</p>
                    <p className="text-gray-800 font-semibold text-lg">Totalt: {product.price * product.quantity} kr</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mt-8 md:mt-0 md:ml-8">
            <div className="border p-6 rounded-xl shadow-lg bg-gray-50">
              <h3 className="text-2xl font-semibold mb-6 text-center">Order Sammanfattning</h3>
              <ul className="space-y-4 mb-6">
                {cart.map(product => (
                  <li key={product.id} className="flex justify-between text-gray-700">
                    <span>{product.name} x {product.quantity}</span>
                    <span>{product.price * product.quantity} kr</span>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-semibold text-gray-900 text-center">Total: {totalPrice} kr</div>
            </div>
          </div>
        </div>
      </div>
      {cart.length > 0 && (
        <div className="mt-4 space-y-6 text-center">
          <Link href="/cart" passHref>
            <button className="inline-block bg-marsala text-white py-3 px-6 rounded-full font-medium hover:bg-gray-300 transition-colors duration-300">
              Tillbaka till Varukorg
            </button>
          </Link>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border p-6 rounded-xl shadow-lg bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">Kundinformation</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">Namn</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-marsala focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium">Adress</label>
                  <input
                    type="text"
                    id="address"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-marsala focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-marsala focus:outline-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="border p-6 rounded-xl shadow-lg bg-gray-50">
              <h3 className="text-2xl font-semibold mb-4">Betalningsinformation</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="paymentMethod" className="block text-gray-700 font-medium">Betalningsmetod</label>
                  <select
                    id="paymentMethod"
                    value={form.paymentMethod}
                    onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
                    className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-marsala focus:outline-none"
                    required
                  >
                    <option value="card">Kreditkort</option>
                    <option value="paypal">PayPal</option>
                    <option value="invoice">Faktura</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="deliveryMethod" className="block text-gray-700 font-medium">Leveransmetod</label>
                  <select
                    id="deliveryMethod"
                    value={form.deliveryMethod}
                    onChange={(e) => setForm({ ...form, deliveryMethod: e.target.value })}
                    className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-marsala focus:outline-none"
                    required
                  >
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="bg-marsala text-white py-3 px-6 rounded-full font-medium hover:bg-marsala-dark transition-colors duration-300 mt-6">
              Slutför köp
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
