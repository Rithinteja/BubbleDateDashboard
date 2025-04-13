'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await auth?.login(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  async function handleResetPassword() {
    try {
      if (!email) {
        setError('Please enter your email address');
        return;
      }
      await auth?.resetPassword(email);
      setError('Password reset email sent. Check your inbox.');
    } catch (error) {
      setError('Failed to reset password');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to Bubble Date</h2>
        {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleResetPassword}
            className="text-purple-600 hover:text-purple-800 text-sm"
          >
            Forgot Password?
          </button>
        </div>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">Don't have an account? </span>
          <Link href="/signup" className="text-purple-600 hover:text-purple-800">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
} 