'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Welcome() {
  const [visitorName, setVisitorName] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/visitor', {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          router.push('/');
          return;
        }

        const data = await res.json();
        setVisitorName(data.nombreCompleto);
        setTicketNumber(data.numeroBoleto);
        setLoading(false);
      } catch (err) {
        router.push('/');
      }
    };

    fetchVisitor();
  }, [router]);

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-green-100">
        <p className="text-lg">Cargando...</p>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">Bienvenido, {visitorName}</h1>
        <p className="mt-4 text-lg">Disfruta tu experiencia en GreenPark.</p>
        <p className="mt-2 text-sm text-gray-500">Número de boleto: {ticketNumber}</p>
      </div>
    </main>
  );
}