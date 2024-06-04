/* eslint-disable @next/next/no-img-element */
// src/app/(static)/returns/page.tsx
'use client';

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-ivory text-foreground p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-marsala mb-6">Retur och byten</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Här hittar du information om hur du returnerar eller byter produkter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img
              src="/images/return.png"
              alt="Returns"
              className="rounded-lg shadow-md w-full h-auto max-h-96 object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-marsala mb-4">Returpolicy</h3>
            <p className="text-gray-700 mb-4">
              Du kan returnera produkter inom 30 dagar från köpet. Se till att produkten är i originalskick.
            </p>
            <h3 className="text-2xl font-bold text-marsala mb-4">Byten</h3>
            <p className="text-gray-700">
              För att byta en produkt, kontakta vår kundservice. Vi hjälper dig att hitta en lösning som passar dig.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPage;
