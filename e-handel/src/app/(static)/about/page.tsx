// src/app/(static)/about/page.tsx
'use client';

import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-ivory text-foreground p-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-4xl font-bold text-marsala mb-6">Om Oss</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl">
            Välkommen till ModuX! Vi är dedikerade till att erbjuda de bästa produkterna och en utmärkt kundupplevelse.
            Vårt team arbetar hårt för att se till att du får högkvalitativa produkter och en sömlös shoppingupplevelse.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <Image
              src="/images/our-team.png"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-marsala mb-4">Vårt Team</h3>
            <p className="text-gray-700 mb-4">
              På ModuX har vi ett passionerat och dedikerat team som arbetar tillsammans för att skapa en fantastisk shoppingupplevelse.
              Vi tror på samarbete och innovation, och vi strävar alltid efter att förbättra våra tjänster.
            </p>
            <p className="text-gray-700">
              Vår kundtjänst är här för att hjälpa dig med alla dina frågor och se till att du är nöjd med dina köp.
              Tveka inte att kontakta oss om du behöver hjälp!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-marsala mb-4">Vår Historia</h3>
            <p className="text-gray-700 mb-4">
              ModuX grundades med målet att erbjuda högkvalitativa produkter till konkurrenskraftiga priser.
              Sedan starten har vi vuxit och utökat vårt sortiment, men vår vision förblir densamma:
              att ge våra kunder en exceptionell shoppingupplevelse.
            </p>
            <p className="text-gray-700">
              Vi är stolta över vår resa och ser fram emot att fortsätta växa tillsammans med våra kunder.
            </p>
          </div>
          <div>
            <Image
              src="/images/modux1.png"
              alt="Our History"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-marsala mb-4">Följ Oss</h3>
          <p className="text-gray-700 mb-4">
            Följ oss på sociala medier för att få de senaste uppdateringarna och exklusiva erbjudanden.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-marsala hover:text-marsala-dark">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24h11.495v-9.294H9.691V10.41h3.129V7.797c0-3.1 1.894-4.789 4.66-4.789 1.325 0 2.464.099 2.795.143v3.244l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.587l-.467 3.296h-3.12V24h6.116c.729 0 1.324-.593 1.324-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-marsala hover:text-marsala-dark">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.838 9.838 0 01-2.828.775A4.93 4.93 0 0023.337 3.1a9.84 9.84 0 01-3.127 1.195A4.917 4.917 0 0016.617 2c-2.736 0-4.952 2.216-4.952 4.952 0 .388.044.765.128 1.127-4.116-.207-7.77-2.179-10.215-5.17a4.922 4.922 0 00-.669 2.489c0 1.718.874 3.234 2.199 4.123a4.9 4.9 0 01-2.24-.619v.062c0 2.402 1.71 4.404 3.978 4.86a4.936 4.936 0 01-2.237.085c.631 1.963 2.457 3.392 4.62 3.432a9.868 9.868 0 01-6.102 2.104c-.395 0-.783-.023-1.167-.067A13.927 13.927 0 007.548 21.5c9.051 0 14.002-7.496 14.002-13.986 0-.213-.005-.426-.014-.637A10.01 10.01 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-marsala hover:text-marsala-dark">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.25 2.243 1.311 3.608.058 1.267.069 1.646.069 4.848s-.011 3.582-.069 4.849c-.061 1.366-.336 2.634-1.311 3.609-.975.975-2.243 1.25-3.608 1.311-1.267.057-1.646.069-4.849.069s-3.582-.012-4.849-.069c-1.366-.061-2.634-.336-3.608-1.311-.975-.975-1.25-2.243-1.311-3.609-.057-1.267-.069-1.646-.069-4.849s.012-3.582.069-4.848c.061-1.366.336-2.634 1.311-3.609.975-.975 2.243-1.25 3.608-1.311 1.267-.057 1.646-.069 4.85-.069zm0-2.163C8.741 0 8.332.012 7.052.072 5.771.131 4.616.398 3.678 1.336 2.74 2.273 2.473 3.428 2.414 4.709 2.353 5.99 2.342 6.4 2.342 12s.011 6.009.072 7.288c.059 1.281.326 2.436 1.264 3.374.938.938 2.093 1.204 3.374 1.264 1.281.059 1.69.072 7.288.072s6.009-.013 7.288-.072c1.281-.059 2.436-.326 3.374-1.264.938-.938 1.204-2.093 1.264-3.374.059-1.281.072-1.69.072-7.288s-.013-6.009-.072-7.288c-.059-1.281-.326-2.436-1.264-3.374C19.573.398 18.418.131 17.137.072 15.857.013 15.448 0 12 0z" />
                <path d="M12 5.838A6.162 6.162 0 105.838 12 6.163 6.163 0 0012 5.838zm0 10.162A3.999 3.999 0 118 12a3.999 3.999 0 014 3.999zM18.406 4.594a1.44 1.44 0 11-1.44-1.44 1.438 1.438 0 011.44 1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
