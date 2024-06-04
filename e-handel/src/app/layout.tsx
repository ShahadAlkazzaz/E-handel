import './globals.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import ClientProvider from './ClientProvider';


export const metadata = {
  title: 'E-handel',
  description: 'E-handelswebbplats',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </ClientProvider>
      </body>
    </html>
  );
}
