// src/app/components/Navbar/Navbar.tsx
'use client';

import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">ModuX</div>
      <div className="flex space-x-4 items-center">
        <Link href="/">Hem</Link>
        <Link href="/static/cart" className="relative">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}
