// pages/api/getCertificate.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import certificates from './certificate.json';

interface Certificate {
  code: string;
  email: string;
  mobile: string;
  imageURL: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code, email, mobile } = req.body;

    // Validate inputs
    if (!code || !email || !mobile) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Find certificate
    const certificate = (certificates as Certificate[]).find(
      (cert) => cert.code === code && cert.email === email && cert.mobile === mobile
    );

    if (certificate) {
      res.status(200).json({ imageURL: certificate.imageURL });
    } else {
      res.status(404).json({ error: 'Certificate not found' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
