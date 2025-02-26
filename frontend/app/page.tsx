"use client";

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Bem vindo à aplicação de agendamentos</h1>
      {isAuthenticated && (
        <Link href="/agendamentos" className="text-lg text-blue-500 hover:underline">
          Ver Agendamentos
        </Link>
      )}
    </div>
  );
}
