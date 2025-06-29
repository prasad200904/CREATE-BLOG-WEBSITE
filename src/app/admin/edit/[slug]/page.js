'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function EditPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    fetch(`/api/posts/${params.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.post.title);
        setContent(data.post.content);
      });
  }, [params.slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/posts/edit/${params.slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();

    if (data.success) {
      alert('✅ Post updated!');
      router.push(`/posts/${data.post.slug}`);
    } else {
      alert('❌ Failed: ' + data.error);
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>Edit Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{
            width: '100%',
            height: '200px',
            marginTop: '20px',
            padding: '10px',
            fontSize: '16px',
          }}
        />

        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
