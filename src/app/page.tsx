'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth?.loading) {
      if (auth?.user) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  }, [auth?.user, auth?.loading, router]);

  // Show a loading state while checking authentication
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
}
