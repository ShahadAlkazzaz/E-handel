// src/pages/products/[id].tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import Image from 'next/image';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f3f1; /* ivory */
  color: #000; /* default foreground */
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 1rem;
  max-width: 1280px;
  margin: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #8f4553; /* marsala */
`;

const ProductImage = styled(Image)`
  margin-bottom: 1rem;
  width: 100%;
  height: auto;
`;

const ProductPrice = styled.p`
  font-size: 1.25rem; /* större textstorlek för priset */
  color: #4a4a4a; /* gray-700 */
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #4a4a4a; /* gray-700 */
  margin-bottom: 1rem;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
`;

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProduct(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching product:', error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <LoaderContainer>
        <ClipLoader color="#8f4553" size={50} />
      </LoaderContainer>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <PageContainer>
      <Main>
        <Title>{product.name}</Title>
        <ProductImage src={product.image} alt={product.name} width={400} height={400} />
        <ProductPrice>{product.price} kr</ProductPrice>
        {product.description && <ProductDescription>{product.description}</ProductDescription>}
      </Main>
    </PageContainer>
  );
};

export default ProductPage;
