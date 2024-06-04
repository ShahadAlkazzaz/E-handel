// src/app/components/Footer/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pewter py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-4 text-marsala text-lg md:text-xl">Kundservice</h3>
          <ul className="space-y-2 font-medium">
            <li><Link href="/help" className="text-marsala hover:underline">Hjälpcenter</Link></li>
            <li><Link href="/contact" className="text-marsala hover:underline">Kontakta oss</Link></li>
            <li><Link href="/returns" className="text-marsala hover:underline">Retur och byten</Link></li>
            <li><Link href="/faq" className="text-marsala hover:underline">Vanliga frågor</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-marsala text-lg md:text-xl">Följ oss</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com" target="_blank" className="text-marsala hover:text-marsala-dark"><FaFacebook size={24} /></Link>
            <Link href="https://www.twitter.com" target="_blank" className="text-marsala hover:text-marsala-dark"><FaTwitter size={24} /></Link>
            <Link href="https://www.instagram.com" target="_blank" className="text-marsala hover:text-marsala-dark"><FaInstagram size={24} /></Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-marsala text-lg md:text-xl">Bli medlem i vår kundklubb</h3>
          <ul className="space-y-2 font-medium">
            <li>10% på ditt första köp*</li>
            <li>Bonuspoäng</li>
            <li>Bonuscheckar</li>
            <li>Personliga & unika medlems erbjudanden</li>
          </ul>
          <Link href="/register" className="bg-marsala text-white py-2 px-4 rounded mt-4 inline-block">Bli medlem</Link>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} MODUX. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
