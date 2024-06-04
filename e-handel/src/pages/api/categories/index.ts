// src/pages/api/categories/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../../types/Product';

const products: Product[] = [
  { id: 1, name: 'CARA - JACKA', price: 199, quantity: 1, image: '/images/CARA - JACKA.png', category: 'Dam' },
  { id: 2, name: 'CHANNELED - klänning', price: 299, quantity: 1, image: '/images/CHANNELED - klänning.png', category: 'Dam' },
  { id: 3, name: 'CIELO - Blus', price: 399, quantity: 1, image: '/images/CIELO - Blus.png', category: 'Dam' },
  { id: 4, name: 'CROPPED -BYXOR', price: 399, quantity: 1, image: '/images/CROPPED -BYXOR.png', category: 'Dam' },
  { id: 5, name: 'FULL LENGTH - JEANS', price: 399, quantity: 1, image: '/images/FULL LENGTH - JEANS.png', category: 'Dam' },
  { id: 6, name: 'IRIS - Blus', price: 399, quantity: 1, image: '/images/IRIS - Blus.png', category: 'Dam' },
  { id: 7, name: 'Jeansjacka - mid blue', price: 399, quantity: 1, image: '/images/Jeansjacka - mid blue.png', category: 'Dam' },
  { id: 8, name: 'Jeansjacka - pink', price: 399, quantity: 1, image: '/images/Jeansjacka - pink.png', category: 'Dam' },
  { id: 9, name: 'JULIANNA - TRÖJA', price: 199, quantity: 1, image: '/images/JULIANNA - TRÖJA.png', category: 'Dam' },
  { id: 10, name: 'LUSIA FLORAL- klänning', price: 199, quantity: 1, image: '/images/LUSIA FLORAL- klänning.png', category: 'Dam' },
  { id: 11, name: 'NINFA - Skjorta', price: 199, quantity: 1, image: '/images/NINFA - Skjorta.png', category: 'Dam' },
  { id: 12, name: 'PUFF SLEEVE - klänning', price: 199, quantity: 1, image: '/images/PUFF SLEEVE - klänning.png', category: 'Dam' },
  { id: 13, name: 'SOFIA - klänning', price: 199, quantity: 1, image: '/images/SOFIA - klänning.png', category: 'Dam' },
  { id: 14, name: 'STANDARD LENGTH -JEANS', price: 199, quantity: 1, image: '/images/STANDARD LENGTH -JEANS.png', category: 'Dam' },
  { id: 15, name: 'VIKELLY SINGLET - Linne', price: 199, quantity: 1, image: '/images/VIKELLY SINGLET - Linne.png', category: 'Dam' },
  { id: 16, name: 'VISIVO - BYXOR', price: 199, quantity: 1, image: '/images/VISIVO - BYXOR.png', category: 'Dam' },
  { id: 17, name: 'Produkt 1', price: 199, quantity: 1, image: '/images/biotherm-sunblock.png', category: 'Herr' },
  { id: 18, name: 'Produkt 2', price: 199, quantity: 1, image: '/images/Jeansjacka - mid blue.png', category: 'Dam' },
  { id: 19, name: 'Produkt 3', price: 199, quantity: 1, image: '/images/VISIVO - BYXOR.png', category: 'Barn' },
  { id: 20, name: 'Produkt 4', price: 199, quantity: 1, image: '/images/PUFF SLEEVE - klänning.png', category: 'Skönhet' },

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  const filteredProducts = products.filter(product => product.category.toLowerCase() === (category as string).toLowerCase());
  res.status(200).json(filteredProducts);
}
