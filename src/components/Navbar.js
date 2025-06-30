'use client';

import Link from 'next/link';
import './Navbar.css'; // if you're using an external CSS file

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link href="/" className="logo">Blog</Link>
      </div>
      <div className="nav-right">
        <Link href="/" className="link">🏠 Home</Link>
        <Link href="/posts" className="link">📝 Posts</Link>
        <Link href="/admin/create" className="link">➕ Create</Link>
        <Link href="/login" className="link">🔐 Login</Link>
      </div>
    </nav>
  );
}
