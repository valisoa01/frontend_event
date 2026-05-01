import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const token = localStorage.getItem('token');
    setIsAdmin(!!token);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-500">
            EventSync
          </Link>
          
          <div className="flex gap-6">
            <Link href="/events" className="text-gray-600 hover:text-primary-500 transition">
              Événements
            </Link>
            <Link href="/speakers" className="text-gray-600 hover:text-primary-500 transition">
              Intervenants
            </Link>
            {isAdmin && (
              <Link href="/admin/dashboard" className="text-gray-600 hover:text-primary-500 transition">
                Admin
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
