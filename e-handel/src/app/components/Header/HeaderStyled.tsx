// src/app/components/Header/HeaderStyled.tsx

'use client';

import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useCart } from '../../context/CartContext';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: #FFFFF0; /* ivory */
`;

const TopBar = styled.div`
  background-color: #E2ACB9; /* rosewater */
  text-align: center;
  padding: 0.25rem 0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const TopBarText = styled.span`
  color: #000;
`;

const TopBarLink = styled(Link)`
  color: #000;
  text-decoration: none;
`;

const NavBar = styled.div`
  padding: 1rem 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoLink = styled(Link)`
  font-size: 3rem;
  /* font-weight: bold; */
  color: #8f4553; /* marsala */
  text-decoration: none;
  font-family: 'Sevillana';
  /* font-family: 'Playfair Display', serif; */

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const CartLink = styled(Link)`
  position: relative;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
    color: #4a4a4a; /* gray-700 */
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: #f00;
  color: #fff;
  border-radius: 9999px;
  height: 1.25rem;
  width: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
`;

const UserMenu = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  margin-left: 1rem;

  svg {
    margin-left: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 0.375rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 20;
  padding: 0.5rem 0;
  width: 12rem;
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a4a4a; /* gray-700 */

  &:hover {
    background-color: #f4f3f1; /* gray-100 */
  }
`;

const SubNavBar = styled.nav`
  background-color: #E6E5E3; /* pewter */
  padding: 0.5rem 0;
`;

const SubNavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  color: #000;
  font-size: 1.125rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SubNavLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderStyled = () => {
  const { cartCount } = useCart();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <HeaderContainer>
      {/* Top bar */}
      <TopBar>
        <Container>
          <TopBarText>10% på ditt första köp som medlem*</TopBarText>
          <TopBarLink href="/register">Bli medlem och tjäna poäng</TopBarLink>
        </Container>
      </TopBar>

      {/* Navbar */}
      <NavBar>
        <Container>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">om oss</NavLink>
          </NavLinks>
          <LogoLink href="/">ModuX</LogoLink>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CartLink href="/cart">
              Varukorg
              <ShoppingCartIcon />
              <CartCount>{cartCount}</CartCount>
            </CartLink>
            {session ? (
              <UserMenu>
                <UserButton onClick={() => setDropdownOpen(!dropdownOpen)}>
                  {session.user.firstname} {session.user.lastname}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </UserButton>
                {dropdownOpen && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => signOut()}>Logga ut</DropdownItem>
                  </DropdownMenu>
                )}
              </UserMenu>
            ) : (
              <NavLink href="/login">Logga in</NavLink>
            )}
          </div>
        </Container>
      </NavBar>

      {/* Sub-navbar */}
      <SubNavBar>
        <Container>
          <SubNavLinks>
            <SubNavLink href="/categories/Dam">Dam</SubNavLink>
            <SubNavLink href="/categories/Herr">Herr</SubNavLink>
            <SubNavLink href="/categories/Barn">Barn</SubNavLink>
            <SubNavLink href="/categories/Skönhet">Skönhet</SubNavLink>
            <SubNavLink href="/categories/Inredning">Inredning</SubNavLink>
            <SubNavLink href="/categories/Presenter">Presenter</SubNavLink>
          </SubNavLinks>
        </Container>
      </SubNavBar>
    </HeaderContainer>
  );
};

export default HeaderStyled;
