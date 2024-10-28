// src/app/api/getCertificate/route.ts
import { NextResponse } from 'next/server';
import certificates from './certificate.json';

interface Certificate {
  code: string;
  email: string;
  mobile: string;
  imageURL: string;
}

export async function POST(request: Request) {
  const { code, email, mobile } = await request.json();

  // Validate inputs
  if (!code || !email || !mobile) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Find certificate
  const certificate = (certificates as Certificate[]).find(
    (cert) => cert.code === code && cert.email === email && cert.mobile === mobile
  );

  if (certificate) {
    return NextResponse.json({ imageURL: certificate.imageURL });
  } else {
    return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
  }
}
