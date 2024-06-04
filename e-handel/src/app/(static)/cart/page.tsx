// src/app/(static)/cart/page.tsx

'use client';

import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';

const CartPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Varukorg</h1>
      <ShoppingCart />
    </div>
  );
};

export default CartPage;
