/* eslint-disable @next/next/no-img-element */
// src/app/(static)/help/page.tsx
'use client';

import Link from 'next/link';

const HelpCenterPage = () => {
  return (
    <div className="min-h-screen bg-ivory text-foreground p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-marsala mb-6">Hjälpcenter</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Här kan du hitta svar på vanliga frågor och få hjälp med dina problem.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-marsala mb-4">Vanliga frågor</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li className="mb-2">
                <strong>Hur kan jag kontakta kundservice?</strong><br />
                Du kan kontakta oss via vårt <Link href="/contact" className="text-marsala hover:underline">kontaktformulär</Link> eller via telefon på 08-123 456 78.
              </li>
              <li className="mb-2">
                <strong>Vad är er returpolicy?</strong><br />
                Vi erbjuder 30 dagars öppet köp på alla våra produkter. För mer information, se vår <Link href="/returns" className="text-marsala hover:underline">retur och byten</Link> sida.
              </li>
              <li className="mb-2">
                <strong>Hur spårar jag min beställning?</strong><br />
                När din beställning har skickats får du ett spårningsnummer via e-post. Du kan använda det för att spåra din beställning på vår leverantörs hemsida.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/images/help-center.png"
              alt="Help Center"
              className="rounded-lg shadow-md w-full h-auto max-h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
