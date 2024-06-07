// src/app/components/Header/Header.tsx
'use client';

import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCart } from '../../context/CartContext';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const { cartCount } = useCart();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top bar */}
      <div className="bg-rosewater text-center py-1">
        <div className="container mx-auto flex justify-between items-center text-base md:text-lg text-black header-text font-semibold px-4">
          <div>
            <span>10% på ditt första köp som medlem*</span>
          </div>
          <div>
            <Link href="/register" className="text-black">Bli medlem och tjäna poäng</Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-ivory py-4 px-4">
        <div className="container mx-auto flex justify-between items-center header-text font-semibold">
          <Link href="/" className="text-5xl md:text-6xl font-bold text-marsala modux-text">ModuX</Link>
          <div className="hidden md:flex items-center space-x-8 text-lg md:text-xl">
            <Link href="/" className="text-black">Home</Link>
            <Link href="/about" className="text-black">om oss</Link>
            <Link href="/cart" className="relative text-black flex items-center">
              Varukorg
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 inline ml-2" />
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs z-10">
                {cartCount}
              </span>
            </Link>
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="focus:outline-none text-black flex items-center"
                >
                  {session.user.firstname} {session.user.lastname}
                  <svg className="ml-2 h-4 w-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 border border-gray-200">
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logga ut
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="text-black">Logga in</Link>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none text-black"
          >
            {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Sub-navbar */}
      <nav className={`bg-pewter py-2 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
        <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:space-x-8 text-black header-text text-lg md:text-xl font-semibold px-4 text-right md:text-left items-end md:items-center">
          <Link href="/" className="text-black md:hidden px-2 py-1">Home</Link>
          <Link href="/about" className="text-black md:hidden px-2 py-1">om oss</Link>
          <Link href="/categories/Dam" className="text-black px-4 py-2 rounded hover:bg-gray-100">Dam</Link>
          <Link href="/categories/Herr" className="text-black px-4 py-2 rounded hover:bg-gray-100">Herr</Link>
          <Link href="/categories/Barn" className="text-black px-4 py-2 rounded hover:bg-gray-100">Barn</Link>
          <Link href="/categories/Skönhet" className="text-black px-4 py-2 rounded hover:bg-gray-100">Skönhet</Link>
          <Link href="/categories/Inredning" className="text-black px-4 py-2 rounded hover:bg-gray-100">Inredning</Link>
          <Link href="/categories/Presenter" className="text-black px-4 py-2 rounded hover:bg-gray-100">Presenter</Link>
          <Link href="/cart" className="relative text-black md:hidden flex items-center px-4 py-2 rounded hover:bg-gray-100">
            Varukorg
            <ShoppingCartIcon className="h-6 w-6 text-gray-700 inline ml-2" />
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs z-10">
              {cartCount}
            </span>
          </Link>
          {session ? (
            <Link href="/account" className="text-black md:hidden px-4 py-2 rounded hover:bg-gray-100">
              {session.user.firstname} {session.user.lastname}
            </Link>
          ) : (
            <Link href="/login" className="text-black md:hidden px-4 py-2 rounded hover:bg-gray-100">Logga in</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
