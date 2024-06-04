// src/app/components/SearchBar/SearchBar.tsx
'use client';

import React from 'react';

const SearchBar = () => {
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Hantera sökningen här, t.ex. genom att skicka en fråga till API eller uppdatera tillstånd
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center py-4 bg-ivory">
      <input
        type="text"
        placeholder="Sök efter produkter"
        className="w-1/2 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-marsala"
      />
      <button
        type="submit"
        className="bg-marsala text-white p-2 rounded-r-md hover:bg-marsala-dark"
      >
        Sök
      </button>
    </form>
  );
};

export default SearchBar;
