'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/posts/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await response.json();

    if (data.success) {
      alert('✅ Post created successfully!');
      router.push(`/posts/${data.post.slug}`);
    } else {
      alert('❌ Error: ' + data.error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write content here..."
          style={{ width: '100%', height: '200px', marginTop: '20px', padding: '10px', fontSize: '16px' }}
        />

        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}
