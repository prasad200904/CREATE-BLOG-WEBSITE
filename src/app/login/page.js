'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.success) {
      router.push('/admin/create');
    } else {
      alert('❌ Login failed!');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <p style={{ fontSize: '14px', color: 'gray' }}>
  (Hint: Username: <b>admin</b>, Password: <b>123456</b>)
</p>

      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: '10px', marginBottom: '10px', display: 'block' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', marginBottom: '10px', display: 'block' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Login
        </button>
      </form>
    </div>
  );
}
