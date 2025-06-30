import { cookies } from 'next/headers';
import CreatePost from './CreatePost.jsx';

export default function CreatePostPage() {
  const token = cookies().get('token')?.value;

  if (token !== 'authenticated') {
    return (
      <div style={{ padding: 40 }}>
        ❌ Unauthorized. Please <a href="/login">Login</a>.
      </div>
    );
  }

  return <CreatePost />;
}
