"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

export default function Certificate() {
  const [certificateData, setCertificateData] = useState<string | null>(null);
  const [form, setForm] = useState({ code: '', email: '', mobile: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/getCertificate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setCertificateData(data.imageURL || null);
  };

  return (
    <div className="flex p-6 flex-col justify-center items-center ">
     <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Certificate Code"
          value={form.code}
          onChange={(e) => setForm({ ...form, code: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
     
      {certificateData && (
        <div className="mt-6 text-center">
          <Image height={500} width={750} src={certificateData} alt="Certificate" className="w-full rounded-md" />
          <Link href={certificateData} download className="block bg-blue-500 p-2 mt-4 rounded-full text-white">
            Download
          </Link>
        </div>
      )}
    </div>
  );
}
