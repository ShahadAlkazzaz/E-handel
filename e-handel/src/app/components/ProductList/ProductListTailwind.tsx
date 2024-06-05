// src/app/components/ProductList/ProductListTailwind.tsx

'use client';
import React from 'react';
import ProductCardTailwind from '../ProductCard/ProductCardTailwind';
import { Product } from '../../../types/Product';

interface ProductListProps {
  products: Product[];
}

const ProductListTailwind: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCardTailwind key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListTailwind;
