// src/app/components/ProductCard/ProductCard.tsx
'use client';

import React from 'react';
import { Product } from '../../../types/Product';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const Card = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled(Image)`
  margin-bottom: 1rem;
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover ${ProductName} {
    color: #8f4553;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.25rem;
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  background-color: #8f4553;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card>
      <ProductLink href={`/products/${product.id}`}>
        <div>
          <ProductImage src={product.image} alt={product.name} width={250} height={250} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} kr</ProductPrice>
        </div>
      </ProductLink>
      <AddToCartButton onClick={() => addToCart(product)}>Lägg till i varukorg</AddToCartButton>
    </Card>
  );
};

export default ProductCard;
