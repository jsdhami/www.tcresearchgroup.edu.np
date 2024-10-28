"use client"
import Image from 'next/image';
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
    <div className="p-6 max-w-lg mx-auto">
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
        <div className="mt-6">
          <Image height={500} width={500} src={certificateData} alt="Certificate" className="w-full" />
          <a href={certificateData} download className="block mt-4 text-blue-500 underline">
            Download Certificate
          </a>
        </div>
      )}
    </div>
  );
}
