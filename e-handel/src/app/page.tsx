// // // src/app/page.tsx
// import ProductList from './components/ProductList/ProductList';
// import SearchBar from './components/SearchBar/SearchBar';
// import { Product } from '../types/Product';

// const products: Product[] = [
//   // Skönhetsprodukter
//   { id: 1, name: 'Garnier Solskydd', price: 150, quantity: 1, image: '/images/solskydd-garnier.png', category: 'Skönhet' },
//   { id: 2, name: 'Biotherm Solskydd', price: 250, quantity: 1, image: '/images/solskydd-biotherm.png', category: 'Skönhet' },
//   { id: 3, name: 'Clarins Solskydd', price: 350, quantity: 1, image: '/images/solskydd-clarins.png', category: 'Skönhet' },
//   { id: 4, name: 'la-roche Solskydd', price: 350, quantity: 1, image: '/images/solskydd-la-roche.png', category: 'Skönhet' },
//   // Nya produkter
//   { id: 5, name: 'Nya-Produkter', price: 450, quantity: 1, image: '/images/nyprodukt-clarins.png', category: 'Nya-Produkter' },
//   { id: 6, name: 'Garnier Solskydd', price: 150, quantity: 1, image: '/images/nyprodukt-olympia.png', category: 'Nya-Produkter' },
//   { id: 7, name: 'Biotherm Solskydd', price: 250, quantity: 1, image: '/images/nyprodukt-loreal.png', category: 'Nya-Produkter' },
//   { id: 8, name: 'Clarins Solskydd', price: 350, quantity: 1, image: '/images/nyprodukt-lancome.png', category: 'Nya-Produkter' },
// ];

// export default function Home() {
//   const bestsellers = products.slice(0, 4); // Antagande: hämta bästsäljande produkter
//   const recommended = products.slice(0, 4); // Antagande: hämta rekommenderade produkter
//   const beautyProducts = products.filter(product => product.category === 'Skönhet');
//   const newProducts = products.filter(product => product.category === 'Nya-Produkter');

//   return (
//     <div className="bg-ivory">
//       <SearchBar />
//       <div className="relative text-center py-16 mb-8 bg-modux parallax" style={{ backgroundImage: 'url(/images/solskydd1.png)' }}>
//         <div className="overlay absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
//         <div className="relative z-10 mt-8 text-white">
//           <h2 className="text-2xl mb-2">15 maj - 15 juni</h2>
//           <p className="text-3xl font-bold">25% på solprodukter vid köp över 200 kr</p>
//           <button className="bg-marsala text-white py-2 px-4 rounded mt-4 hover:bg-marsala-dark transition duration-300">Shoppa nu</button>
//         </div>
//       </div>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl mb-4 text-marsala font-bold">Erbjudande från skönhet</h2>
//         <ProductList products={beautyProducts} />
//       </section>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl mb-4 text-marsala font-bold">Nya Produkter</h2>
//         <ProductList products={newProducts} />
//       </section>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl mb-4 text-marsala font-bold">Bästsäljare</h2>
//         <ProductList products={bestsellers} />
//       </section>
//       <section className="container mx-auto p-4">
//         <h2 className="text-2xl mb-4 text-marsala font-bold">Rekommenderade Produkter</h2>
//         <ProductList products={recommended} />
//       </section>
//       <div className="text-center mt-8 mb-16">
//         <button className="bg-marsala text-white py-2 px-4 rounded hover:bg-marsala-dark transition duration-300">Se fler erbjudande</button>
//       </div>
//     </div>
//   );
// }



// src/app/page.tsx
// funkar 5 6
// funkar med tailwind och jätte bra i home
// 'use client';
// import ProductList from './components/ProductList/ProductList';
// import SearchBar from './components/SearchBar/SearchBar';
// import { Product } from '../types/Product';

// const products: Product[] = [
//     // Skönhetsprodukter
//   { id: 1, name: 'Garnier Solskydd', price: 150, quantity: 1, image: '/images/solskydd-garnier.png', category: 'Skönhet' },
//   { id: 2, name: 'Biotherm Solskydd', price: 250, quantity: 1, image: '/images/solskydd-biotherm.png', category: 'Skönhet' },
//   { id: 3, name: 'Clarins Solskydd', price: 350, quantity: 1, image: '/images/solskydd-clarins.png', category: 'Skönhet' },
//   { id: 4, name: 'la-roche Solskydd', price: 350, quantity: 1, image: '/images/solskydd-la-roche.png', category: 'Skönhet' },
//   // nya produkter
//   { id: 5, name: 'Nya-Produkter', price: 450, quantity: 1, image: '/images/nyprodukt-clarins.png', category: 'Nya-Produkter' },
//   { id: 6, name: 'Garnier Solskydd', price: 150, quantity: 1, image: '/images/nyprodukt-olympia.png', category: 'Nya-Produkter' },
//   { id: 7, name: 'Biotherm Solskydd', price: 250, quantity: 1, image: '/images/nyprodukt-loreal.png', category: 'Nya-Produkter' },
//   { id: 8, name: 'Clarins Solskydd', price: 350, quantity: 1, image: '/images/nyprodukt-lancome.png', category: 'Nya-Produkter' },
// ];

// export default function Home() {
//   const bestsellers = products.slice(0, 4); // Antagande: hämta bästsäljande produkter
//   const recommended = products.slice(0, 4); // Antagande: hämta rekommenderade produkter
//   const beautyProducts = products.filter(product => product.category === 'Skönhet');
//   const newProducts = products.filter(product => product.category === 'Nya-Produkter');

//   return (
//     <div className="bg-ivory">
//       <SearchBar />
//       <div className="relative text-center py-16 mb-8 bg-modux parallax" style={{ backgroundImage: 'url(/images/solskydd1.png)' }}>
//         <div className="overlay absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
//         <div className="relative z-10 mt-8 text-white">
//           <h2 className="text-3xl mb-4 font-bold">15 maj - 15 juni</h2>
//           <p className="text-4xl font-extrabold mb-6">25% på solprodukter vid köp över 200 kr</p>
//           <button className="bg-marsala text-white py-2 px-6 rounded">Shoppa nu</button>
//         </div>
//       </div>
//       <section className="container mx-auto p-6">
//         <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Erbjudande från skönhet</h2>
//         <ProductList products={beautyProducts} />
//       </section>
//       <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
//         <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Nya Produkter</h2>
//         <ProductList products={newProducts} />
//       </section>
//       <section className="container mx-auto p-6">
//         <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Bästsäljare</h2>
//         <ProductList products={bestsellers} />
//       </section>
//       <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
//         <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Rekommenderade Produkter</h2>
//         <ProductList products={recommended} />
//       </section>
//       <div className="text-center mt-12 mb-16">
//         <button className="bg-marsala text-white py-2 px-6 rounded">Se fler erbjudande</button>
//       </div>
//     </div>
//   );
// }




// src/app/page.tsx
'use client';
import ProductListTailwind from './components/ProductList/ProductListTailwind';
import SearchBar from './components/SearchBar/SearchBar';
import { Product } from '../types/Product';

const products: Product[] = [
  // Sol-Products
  { id: 1, name: 'Garnier', price: 150, quantity: 1, image: '/images/solskydd-garnier.png', category: 'Sol-Products' },
  { id: 2, name: 'Biotherm', price: 250, quantity: 1, image: '/images/solskydd-biotherm.png', category: 'Sol-Products' },
  { id: 3, name: 'Clarins', price: 350, quantity: 1, image: '/images/solskydd-clarins.png', category: 'Sol-Products' },
  { id: 4, name: 'la-roche', price: 350, quantity: 1, image: '/images/solskydd-la-roche.png', category: 'Sol-Products' },
  // nya produkter
  { id: 5, name: 'Clarins', price: 450, quantity: 1, image: '/images/nyprodukt-clarins.png', category: 'Nya-Produkter' },
  { id: 6, name: 'Olympia', price: 150, quantity: 1, image: '/images/nyprodukt-olympia.png', category: 'Nya-Produkter' },
  { id: 7, name: 'Loreal', price: 250, quantity: 1, image: '/images/nyprodukt-loreal.png', category: 'Nya-Produkter' },
  { id: 8, name: 'Lancome', price: 350, quantity: 1, image: '/images/nyprodukt-lancome.png', category: 'Nya-Produkter' },
  // Bästsäljare
  { id: 9, name: 'Clinique', price: 450, quantity: 1, image: '/images/Clinique.png', category: 'Bästsäljare' },
  { id: 10, name: 'DIOR', price: 150, quantity: 1, image: '/images/DIOR.png', category: 'Bästsäljare' },
  { id: 11, name: 'Biotherm', price: 250, quantity: 1, image: '/images/Biotherm.png', category: 'Bästsäljare' },
  { id: 12, name: 'Valentino', price: 350, quantity: 1, image: '/images/Valentino.png', category: 'Bästsäljare' },
  //Rekommenderade Produkter
  { id: 13, name: 'Clarins Night Cream', price: 450, quantity: 1, image: '/images/Clarins Night Cream.png', category: 'Rekommenderade-Produkter' },
  { id: 14, name: 'Estée Lauder Night Cream', price: 150, quantity: 1, image: '/images/Estée Lauder Night Cream.png', category: 'Rekommenderade-Produkter' },
  { id: 15, name: 'Kiehls', price: 250, quantity: 1, image: '/images/Kiehls.png', category: 'Rekommenderade-Produkter' },
  { id: 16, name: 'Shiseido', price: 350, quantity: 1, image: '/images/Shiseido.png', category: 'Rekommenderade-Produkter' },
  //Dam
  { id: 17, name: 'VISIVO - BYXOR', price: 599, quantity: 1, image: '/images/VISIVO - BYXOR.png', category: 'Dam' },
  { id: 18, name: 'NINFA - Skjorta', price: 450, quantity: 1, image: '/images/NINFA - Skjorta.png', category: 'Dam' },
  { id: 19, name: 'JULIANNA - TRÖJA', price: 399, quantity: 1, image: '/images/JULIANNA - TRÖJA.png', category: 'Dam' },
  { id: 20, name: 'CHANNELED - klänning', price: 350, quantity: 1, image: '/images/CHANNELED - klänning.png', category: 'Dam' },
  //Herr
  { id: 21, name: 'Levis®', price: 571, quantity: 1, image: '/images/Levis.png', category: 'Herr' },
  { id: 22, name: 'Tommy Hilfiger', price: 449, quantity: 1, image: '/images/Tommy Hilfiger.png', category: 'Herr' },
  { id: 23, name: 'U.S. Polo Assn', price: 394, quantity: 1, image: '/images/U.S. Polo Assn.png', category: 'Herr' },
  { id: 24, name: 'Jack & Jones', price: 339, quantity: 1, image: '/images/Jack & Jones.png', category: 'Herr' },
];

export default function Home() {
  const sunProducts = products.filter(product => product.category === 'Sol-Products');
  const newProducts = products.filter(product => product.category === 'Nya-Produkter');
  const bestsellers = products.filter(product => product.category === 'Bästsäljare');
  const recommended = products.filter(product => product.category === 'Rekommenderade-Produkter');
  const Women = products.filter(product => product.category === 'Dam');
  const Men = products.filter(product => product.category === 'Herr');


  return (
    <div className="bg-ivory">
      {/* <SearchBar /> */}
      <div className="relative text-center py-16 mb-8 bg-modux parallax" style={{ backgroundImage: 'url(/images/solskydd1.png)' }}>
        <div className="overlay absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="relative z-10 mt-8 text-white">
          <h2 className="text-3xl mb-4 font-bold">15 maj - 15 juni</h2>
          <p className="text-4xl font-extrabold mb-6">25% på solprodukter vid köp över 200 kr</p>
          <button className="bg-marsala text-white py-2 px-6 rounded">Shoppa nu</button>
        </div>
      </div>
      <section className="container mx-auto p-6">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Erbjudande från SolProdukter</h2>
        <ProductListTailwind products={sunProducts} />
      </section>
      <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Nya Produkter</h2>
        <ProductListTailwind products={newProducts} />
      </section>
      <section className="container mx-auto p-6">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Bästsäljare</h2>
        <ProductListTailwind products={bestsellers} />
      </section>
      <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Rekommenderade Produkter</h2>
        <ProductListTailwind products={recommended} />
      </section>
      <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Dam Kläder</h2>
        <ProductListTailwind products={Women} />
      </section>
      <section className="container mx-auto p-6 bg-gray-100 rounded-lg my-8">
        <h2 className="text-3xl mb-6 text-marsala font-bold text-center">Herr Kläder</h2>
        <ProductListTailwind products={Men} />
      </section>
      <div className="text-center mt-12 mb-16">
        <button className="bg-marsala text-white py-2 px-6 rounded">Se fler erbjudande</button>
      </div>
    </div>
  );
}
