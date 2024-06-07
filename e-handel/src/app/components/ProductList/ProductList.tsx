// // // src/app/components/ProductList/ProductList.tsx
'use client';
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../../types/Product';
import styled from 'styled-components';

interface ProductListProps {
  products: Product[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
