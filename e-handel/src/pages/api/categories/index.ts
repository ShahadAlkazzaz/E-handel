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
  { id: 17, name: 'Levis®', price: 571, quantity: 1, image: '/images/Levis.png', category: 'Herr' },
  { id: 18, name: 'Tommy Hilfiger', price: 449, quantity: 1, image: '/images/Tommy Hilfiger.png', category: 'Herr' },
  { id: 19, name: 'U.S. Polo Assn', price: 394, quantity: 1, image: '/images/U.S. Polo Assn.png', category: 'Herr' },
  { id: 20, name: 'INDICODE JEANS', price: 605, quantity: 1, image: '/images/INDICODE JEANS.png', category: 'Herr' },
  { id: 21, name: 'Jack & Jones', price: 339, quantity: 1, image: '/images/Jack & Jones.png', category: 'Herr' },
  { id: 22, name: 'GAP', price: 199, quantity: 1, image: '/images/GAP.png', category: 'Herr' },
  { id: 23, name: 'LA VIE EST BELLE', price: 850, quantity: 1, image: '/images/LA VIE EST BELLE.png', category: 'Skönhet' },
  { id: 24, name: 'ADVANCED NIGHT REPAIR', price: 779, quantity: 1, image: '/images/ADVANCED NIGHT REPAIR.png', category: 'Skönhet' },
  { id: 25, name: 'Mugler Fragrances', price: 1309, quantity: 1, image: '/images/Mugler Fragrances.png', category: 'Skönhet' },
  { id: 26, name: 'Elie Saab Fragrance', price: 911, quantity: 1, image: '/images/Elie Saab Fragrance.png', category: 'Skönhet' },
  { id: 27, name: 'Clinique moisture', price: 150, quantity: 1, image: '/images/Clinique moisture.png', category: 'Skönhet' },
  { id: 28, name: 'LA NUIT TRÉSOR', price: 250, quantity: 1, image: '/images/LA NUIT TRÉSOR.png', category: 'Skönhet' },
  { id: 29, name: 'Rituals', price: 350, quantity: 1, image: '/images/Rituals.png', category: 'Skönhet' },
  { id: 30, name: 'Biotherm Deo roll', price: 450, quantity: 1, image: '/images/Biotherm Deo roll.png', category: 'Skönhet' },
  { id: 31, name: 'ESTÉE LAUDER', price: 150, quantity: 1, image: '/images/ESTÉE LAUDER.png', category: 'Skönhet' },
  { id: 32, name: 'Rituals body lotion', price: 250, quantity: 1, image: '/images/Rituals body lotion.png', category: 'Skönhet' },
  { id: 33, name: 'Viktor & Rolf Fragrance', price: 350, quantity: 1, image: '/images/Viktor & Rolf Fragrance.png', category: 'Skönhet' },
  { id: 34, name: 'Rituals bath and body', price: 350, quantity: 1, image: '/images/Rituals bath and body.png', category: 'Presenter' },
  { id: 35, name: 'MAC', price: 649, quantity: 1, image: '/images/MAC.png', category: 'Presenter' },
  { id: 36, name: 'Maybelline New York', price: 449, quantity: 1, image: '/images/Maybelline New York.png', category: 'Presenter' },
  { id: 37, name: 'Rituals blue', price: 399, quantity: 1, image: '/images/Rituals blue.png', category: 'Presenter' },
  { id: 38, name: 'LOréal Paris', price: 329, quantity: 1, image: '/images/LOréal Paris.png', category: 'Presenter' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ error: 'Category is required' });
  }

  const filteredProducts = products.filter(product => product.category.toLowerCase() === (category as string).toLowerCase());
  res.status(200).json(filteredProducts);
}
