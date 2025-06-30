import { dbConnect } from '@/lib/dbConnect';
import Post from '@/model/Post';

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { title, content } = await request.json();

    const updatedPost = await Post.findOneAndUpdate(
      { slug: params.slug },
      { title, content },
      { new: true }
    );

    if (!updatedPost) {
      return Response.json({ success: false, error: 'Post not found' }, { status: 404 });
    }

    return Response.json({ success: true, post: updatedPost });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
