'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AllPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/posts/all')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts || []);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load posts.');
        setLoading(false);
      });
  }, []);

  const handleDelete = async (slug) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const res = await fetch(`/api/posts/delete/${slug}`, { method: 'DELETE' });
      const data = await res.json();

      if (data.success) {
        alert('✅ Post deleted');
        setPosts(posts.filter((post) => post.slug !== slug));
      } else {
        alert('❌ Failed to delete post: ' + data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '40px', color: '#fff' }}>
      <h1>📝 All Blog Posts</h1>

      {loading && <p>⏳ Loading posts...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && posts.length === 0 && <p>No posts found.</p>}

      <ul style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
        {posts.map((post) => (
          <li key={post._id} style={{ marginBottom: '20px', borderBottom: '1px solid #555', paddingBottom: '10px' }}>
            <Link href={`/posts/${post.slug}`} style={{ fontSize: '20px', color: '#4ac6ff' }}>
              {post.title}
            </Link>
            <div style={{ fontSize: '14px', color: '#aaa' }}>
              {new Date(post.createdAt).toLocaleString()}
            </div>

            <button
              onClick={() => handleDelete(post.slug)}
              style={{
                marginTop: '5px',
                padding: '5px 10px',
                backgroundColor: 'red',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>

            <Link href={`/admin/edit/${post.slug}`}>
              <button
                style={{
                  marginLeft: '10px',
                  padding: '5px 10px',
                  backgroundColor: 'orange',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Edit
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
