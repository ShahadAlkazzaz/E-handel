// src/pages/api/products/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../types/Product';

const products: Product[] = [
  { id: 1, name: 'CARA - JACKA', price: 199, quantity: 1, image: '/images/CARA - JACKA.png', category: 'Dam' },
  { id: 2, name: 'CHANNELED - klänning', price: 299, quantity: 1, image: '/images/CHANNELED - klänning.png', category: 'Herr' },
  { id: 3, name: 'CIELO - Blus', price: 399, quantity: 1, image: '/images/CIELO - Blus.png', category: 'Barn' },
  { id: 4, name: 'CROPPED -BYXOR', price: 399, quantity: 1, image: '/images/CROPPED -BYXOR.png', category: 'Dam' },
  { id: 5, name: 'Produkt 5', price: 399, quantity: 1, image: '/images/FULL LENGTH - JEANS.png', category: 'Dam' },
  { id: 6, name: 'Produkt 6', price: 399, quantity: 1, image: '/images/IRIS - Blus.png', category: 'Dam' },
  { id: 7, name: 'Produkt 7', price: 399, quantity: 1, image: '/images/Jeansjacka - mid blue.png', category: 'Dam' },
  { id: 8, name: 'Produkt 8', price: 399, quantity: 1, image: '/images/Jeansjacka - pink.png', category: 'Dam' },
  { id: 9, name: 'Produkt 9', price: 199, quantity: 1, image: '/images/JULIANNA - TRÖJA.png', category: 'Dam' },
  { id: 10, name: 'Produkt 10', price: 199, quantity: 1, image: '/images/LUSIA FLORAL- klänning.png', category: 'Dam' },
  { id: 11, name: 'Produkt 11', price: 199, quantity: 1, image: '/images/NINFA - Skjorta.png', category: 'Dam' },
  { id: 12, name: 'Produkt 12', price: 199, quantity: 1, image: '/images/PUFF SLEEVE - klänning.png', category: 'Dam' },
  { id: 13, name: 'Produkt 13', price: 199, quantity: 1, image: '/images/SOFIA - klänning.png', category: 'Dam' },
  { id: 14, name: 'Produkt 14', price: 199, quantity: 1, image: '/images/STANDARD LENGTH -JEANS.png', category: 'Dam' },
  { id: 15, name: 'Produkt 15', price: 199, quantity: 1, image: '/images/VIKELLY SINGLET - Linne.png', category: 'Dam' },
  { id: 16, name: 'Produkt 16', price: 199, quantity: 1, image: '/images/VISIVO - BYXOR.png', category: 'Dam' },
  // Lägg till fler produkter med olika kategorier
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const product = products.find(product => product.id === parseInt(id as string));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
}
