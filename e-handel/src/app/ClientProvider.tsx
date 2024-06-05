// // // src/app/ClientProviders.tsx

// 'use client';

// import React from 'react';
// import { SessionProvider } from 'next-auth/react';

// const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default ClientProvider;






// src/app/ClientProvider.tsx

'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { CartProvider } from './context/CartContext';

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </SessionProvider>
  );
};

export default ClientProvider;
