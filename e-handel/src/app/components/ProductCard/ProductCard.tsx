// // src/app/components/ProductCard/ProductCard.tsx
// // funkar 30 5
// 'use client';

// import React from 'react';
// import { Product } from '../../../types/Product';
// import Image from 'next/image';
// import Link from 'next/link';
// import styled from 'styled-components';

// interface ProductCardProps {
//   product: Product;
// }

// const Card = styled.div`
//   border: 1px solid #e2e2e2;
//   border-radius: 8px;
//   padding: 1rem;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
//   }
// `;

// const ProductImageWrapper = styled.div`
//   width: 100%;
//   padding-top: 100%; /* 1:1 Aspect Ratio */
//   position: relative;
//   margin-bottom: 1rem;
// `;

// const ProductImage = styled(Image)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// const ProductName = styled.h3`
//   font-size: 1.125rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   color: #000; /* svart färg */
// `;

// const ProductLink = styled(Link)`
//   text-decoration: none; /* ta bort understrykning */
//   color: inherit;

//   &:hover ${ProductName} {
//     color: #8f4553; /* ändra färg vid hover */
//   }
// `;

// const ProductPrice = styled.p`
//   font-size: 1.25rem; /* större textstorlek för priset */
//   color: #4a4a4a; /* gray-700 */
//   margin-bottom: 1rem;
// `;

// const AddToCartButton = styled.button`
//   background-color: #8f4553; /* marsala */
//   color: #fff;
//   padding: 0.5rem 1rem;
//   border-radius: 4px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #723847; /* mörkare marsala */
//   }
// `;

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <Card>
//       <ProductLink href={`/products/${product.id}`}>
//         <div>
//           <ProductImageWrapper>
//             <ProductImage src={product.image} alt={product.name} layout="fill" />
//           </ProductImageWrapper>
//           <ProductName>{product.name}</ProductName>
//           <ProductPrice>{product.price} kr</ProductPrice>
//         </div>
//       </ProductLink>
//       <AddToCartButton>Lägg till i varukorg</AddToCartButton>
//     </Card>
//   );
// };

// export default ProductCard;




// använder nu ta bort inte
// // src/app/components/ProductCard/ProductCard.tsx
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
  color: #000; /* svart färg */
`;

const ProductLink = styled(Link)`
  text-decoration: none; /* ta bort understrykning */
  color: inherit;

  &:hover ${ProductName} {
    color: #8f4553; /* ändra färg vid hover */
  }
`;

const ProductPrice = styled.p`
  font-size: 1.25rem; /* större textstorlek för priset */
  color: #4a4a4a; /* gray-700 */
  margin-bottom: 1rem;
`;

const AddToCartButton = styled.button`
  background-color: #8f4553; /* marsala */
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
