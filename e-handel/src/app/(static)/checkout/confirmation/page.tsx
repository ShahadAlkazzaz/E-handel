// src/app/(static)/checkout/confirmation/page.tsx

import { FaCheckCircle } from 'react-icons/fa';

const ConfirmationPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white shadow-2xl rounded-xl max-w-2xl mx-auto text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-6 mx-auto" />
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Tack för ditt köp!</h2>
          <p className="text-lg text-gray-700 mb-6">Din beställning har mottagits och kommer att behandlas inom kort.</p>
          <p className="text-gray-500">Du kommer att få en bekräftelse via email med dina beställningsdetaljer.</p>
        </div>
      </div>
    );
};

export default ConfirmationPage;
