'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { updatePassword } from 'firebase/auth';

export default function Settings() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const auth = useAuth();

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      if (auth?.user) {
        await updatePassword(auth.user, newPassword);
        setSuccess('Password updated successfully');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setError('Please log in again before changing your password');
      }
    } catch (error) {
      setError('Failed to update password');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 p-8">
      <nav className="flex justify-between items-center mb-8">
        <div className="text-white text-2xl font-bold">Settings</div>
        <div className="flex gap-4">
          <button 
            onClick={() => router.push('/dashboard')}
            className="text-white hover:text-gray-200"
          >
            Back to Dashboard
          </button>
          <button 
            onClick={() => auth?.logout()}
            className="text-white hover:text-gray-200"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-md mx-auto bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-600">{auth?.user?.email}</p>
        </div>

        <form onSubmit={handlePasswordChange}>
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
          {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">{success}</div>}
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Danger Zone</h3>
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                // Implement account deletion logic here
              }
            }}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
} 