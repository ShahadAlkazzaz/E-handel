// src/pages/categories/[category].tsx
'use client';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import ProductList from '@/app/components/ProductList/ProductList';
import styled from 'styled-components';
import ClientProvider from '@/app/ClientProvider';
import ClientLayout from '@/app/ClientLayout';
import Link from 'next/link';
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
  text-transform: capitalize;
  color: #8f4553; /* marsala */
`;

const NoProductsMessage = styled.p`
  font-size: 1.125rem;
  color: #4a4a4a; /* gray-700 */
`;

const BackButton = styled.button`
  background-color: #8f4553; /* marsala */
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  width: 100%;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-right: 0.5rem;
  color: #8f4553; /* marsala */
`;

const FilterSelect = styled.select`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  background-color: #fff;
  color: #8f4553; /* marsala */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#8f4553' : '#fff')}; /* marsala */
  color: ${({ active }) => (active ? '#fff' : '#8f4553')}; /* marsala */
  padding: 0.5rem 1rem;
  border: 1px solid #8f4553;
  border-radius: 4px;
  margin: 0 0.5rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
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

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  useEffect(() => {
    if (category) {
      fetch(`/api/categories?category=${category}`)
        .then(response => response.json())
        .then(data => {
          console.log("Data från API:", data);
          setTimeout(() => {
            setProducts(data);
            setLoading(false);
          }, 2000);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [category]);

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(product => {
      if (priceFilter === 'low') return product.price < 200;
      if (priceFilter === 'medium') return product.price >= 200 && product.price <= 400;
      if (priceFilter === 'high') return product.price > 400;
      return true;
    });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  if (loading) {
    return (
      <LoaderContainer>
        <ClipLoader color="#8f4553" size={50} />
      </LoaderContainer>
    );
  }

  return (
    <ClientProvider>
      <ClientLayout>
        <PageContainer>
          <Link href="/">
            <BackButton>Tillbaka till startsidan</BackButton>
          </Link>
          <Main>
            <Title>{category}</Title>
            <SearchInput
              type="text"
              placeholder="Sök produkter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FilterContainer>
              <FilterLabel>Filtrera efter pris:</FilterLabel>
              <FilterSelect
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">Alla priser</option>
                <option value="low">Under 200 kr</option>
                <option value="medium">200-400 kr</option>
                <option value="high">Över 400 kr</option>
              </FilterSelect>
            </FilterContainer>
            {currentProducts.length > 0 ? (
              <>
                <ProductList products={currentProducts} />
                <PaginationContainer>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationButton
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      active={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationButton>
                  ))}
                </PaginationContainer>
              </>
            ) : (
              <NoProductsMessage>Inga produkter tillgängliga i denna kategori.</NoProductsMessage>
            )}
          </Main>
        </PageContainer>
      </ClientLayout>
    </ClientProvider>
  );
};

export default CategoryPage;
