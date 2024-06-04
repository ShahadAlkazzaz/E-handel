/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// src/app/(static)/faq/page.tsx
'use client';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-ivory text-foreground p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-marsala mb-6">Vanliga Frågor</h2>
        <div className="flex justify-center mb-8">
          <img
            src="/images/faq.png"
            alt="FAQ"
            className="rounded-lg shadow-md max-w-full h-auto"
            style={{ maxHeight: '300px', width: 'auto' }}
          />
        </div>
        <div className="space-y-8">
          <div>
            <h4 className="text-2xl font-bold text-marsala mb-4">Hur kan jag registrera mig som medlem?</h4>
            <p className="text-gray-700">
              Du kan registrera dig som medlem genom att klicka på <a href="/register" className="text-marsala hover:underline">Bli medlem</a> länken och fylla i formuläret.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-marsala mb-4">Hur kan jag ändra mina kontouppgifter?</h4>
            <p className="text-gray-700">
              Du kan ändra dina kontouppgifter genom att logga in på ditt konto och gå till sidan "Kontoinställningar".
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-marsala mb-4">Hur fungerar bonuspoängen?</h4>
            <p className="text-gray-700">
              Du tjänar bonuspoäng på varje köp du gör. Dessa poäng kan användas för att få rabatt på framtida köp. För mer information, se vår sida om <a href="/bonus" className="text-marsala hover:underline">bonuspoäng</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
