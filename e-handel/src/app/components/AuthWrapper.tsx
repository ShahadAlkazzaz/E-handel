// // src/app/components/AuthWrapper.tsx

'use client';

import { SessionProvider } from 'next-auth/react';

const AuthWrapper = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthWrapper;
