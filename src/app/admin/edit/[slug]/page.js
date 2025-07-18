'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function EditPostPage() {
  const router = useRouter();
  const { slug } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Fetch post by slug
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.post?.title || '');
        setContent(data.post?.content || '');
      });
  }, [slug]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/posts/update/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();

    if (data.success) {
      alert('✅ Post updated successfully!');
      router.push(`/posts/${data.post.slug}`);
    } else {
      alert('❌ Failed to update post: ' + data.error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Edit Post</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
          style={{ width: '100%', height: '200px', padding: '10px', marginTop: '20px' }}
        />
        <button
          type="submit"
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Update Post
        </button>
      </form>
    </div>
  );
}
