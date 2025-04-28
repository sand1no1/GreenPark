'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor llena todos los campos.');
      return;
    }

    try {
    const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
        });          

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || 'Error desconocido.');
        return;
      }

      router.push('/welcome');
    } catch (err) {
      setError('No se pudo conectar al servidor.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center">Registro de Acceso</h1>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 border rounded-xl focus:outline-none focus:ring"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-3 border rounded-xl focus:outline-none focus:ring"
      />
      <button type="submit" className="bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">
        Entrar
      </button>
    </form>
  );
}