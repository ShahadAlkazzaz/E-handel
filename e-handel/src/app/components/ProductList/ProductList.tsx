// // // src/app/components/ProductList/ProductList.tsx
// // funkar 5 6
// // 'use client';
// // import React from 'react';
// // import ProductCard from '../ProductCard/ProductCard';
// // import { Product } from '../../../types/Product';
// // import styled from 'styled-components';

// // interface ProductListProps {
// //   products: Product[];
// // }

// // const Grid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(1, 1fr);
// //   gap: 1.5rem;

// //   @media (min-width: 640px) {
// //     grid-template-columns: repeat(2, 1fr);
// //   }

// //   @media (min-width: 768px) {
// //     grid-template-columns: repeat(3, 1fr);
// //   }

// //   @media (min-width: 1024px) {
// //     grid-template-columns: repeat(4, 1fr);
// //   }
// // `;

// // const ProductList: React.FC<ProductListProps> = ({ products }) => {
// //   return (
// //     <Grid>
// //       {products.map(product => (
// //         <ProductCard key={product.id} product={product} />
// //       ))}
// //     </Grid>
// //   );
// // }

// // export default ProductList;



// // funkar med tailwind och jätte bra i home
// 'use client';
// import React from 'react';
// import ProductCard from '../ProductCard/ProductCard';
// import { Product } from '../../../types/Product';

// interface ProductListProps {
//   products: Product[];
// }

// const ProductList: React.FC<ProductListProps> = ({ products }) => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

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
