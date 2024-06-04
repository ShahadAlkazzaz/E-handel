// // src/app/(static)/login/page.tsx
'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });
    if (res?.ok) {
      router.push('/');
    } else {
      console.error('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg">
        <div className="w-full md:w-1/2 p-8 bg-white rounded-l-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-marsala focus:border-marsala sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-marsala focus:border-marsala sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-marsala hover:bg-marsala-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-marsala"
            >
              Login
            </button>
          </form>
        </div>
        <div className="hidden md:flex w-1/2 bg-gradient-to-r from-marsala to-marsala-dark text-white p-8 rounded-r-lg flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">Hej, Användare!</h3>
<p className="mt-4">Registrera dig med dina personliga uppgifter för att använda alla webbplatsens funktioner</p>

        <Link href="/register" className="mt-6 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-marsala bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Registrera</Link>

        </div>
      </div>
    </div>
  );
};

export default Login;
