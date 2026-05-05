'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    setIsAdmin(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAdmin(false);
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-500 hover:text-primary-600 transition">
            EventSync
          </Link>
          
          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            <Link href="/events" className="text-gray-600 hover:text-primary-500 transition">
              Events
            </Link>
            <Link href="/speakers" className="text-gray-600 hover:text-primary-500 transition">
              Speakers
            </Link>
            {isAdmin ? (
              <>
                <Link href="/admin/dashboard" className="text-gray-600 hover:text-primary-500 transition">
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-error hover:text-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/admin/login" className="btn-primary text-sm">
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}