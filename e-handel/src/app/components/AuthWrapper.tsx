// // src/app/components/AuthWrapper.tsx
// 'use client';

// import { SessionProvider } from 'next-auth/react';
// import { CartProvider } from '../context/CartContext';

// export default function AuthWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <SessionProvider>
//       <CartProvider>{children}</CartProvider>
//     </SessionProvider>
//   );
// }


// src/app/components/AuthWrapper.tsx

'use client';

import { SessionProvider } from 'next-auth/react';

const AuthWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapper;

