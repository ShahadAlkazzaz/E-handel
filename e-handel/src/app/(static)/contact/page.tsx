/* eslint-disable @next/next/no-img-element */
// src/app/(static)/contact/page.tsx
'use client';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-ivory text-foreground p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-marsala mb-6">Kontakta oss</h2>
        <p className="text-lg text-gray-700 mb-4 text-center">
          Har du några frågor? Fyll i formuläret nedan så återkommer vi så snart som möjligt.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src="/images/contact-us.png"
            alt="Contact Us"
            className="rounded-lg shadow-md max-w-full h-auto"
            style={{ maxHeight: '300px', width: 'auto' }}
          />
        </div>
        <form className="max-w-xl mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Namn</label>
            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Meddelande</label>
            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-marsala text-white py-2 px-4 rounded">Skicka</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
