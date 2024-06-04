/* eslint-disable import/no-anonymous-default-export */
// src/pages/api/auth/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstname, lastname, email, password, phone } = req.body;

  if (!firstname || !lastname || !email || !password || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password: hashedPassword,
        phone,
      },
    });

    console.log('New user created:', newUser); // Log the new user

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error); // Log any error
    res.status(500).json({ message: 'Something went wrong' });
  }
};
