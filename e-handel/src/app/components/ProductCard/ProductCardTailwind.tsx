// src/app/components/ProductCard/ProductCardTailwind.tsx

'use client';

import React from 'react';
import { Product } from '../../../types/Product';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCardTailwind: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col justify-between">
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-col items-center">
          <div className="w-full h-64 relative">
            <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mt-4">{product.name}</h3>
          <p className="text-lg text-gray-700 mt-2">{product.price} kr</p>
        </div>
      </Link>
      <button
        className="bg-marsala text-white py-2 px-4 mt-4 rounded hover:bg-marsala-dark"
        onClick={() => addToCart(product)}
      >
        Lägg till i varukorg
      </button>
    </div>
  );
};

export default ProductCardTailwind;
