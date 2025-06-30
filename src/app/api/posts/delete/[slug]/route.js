import { dbConnect } from '@/lib/dbConnect';
import Post from '@/model/Post';

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const deletedPost = await Post.findOneAndDelete({ slug: params.slug });
    if (!deletedPost) {
      return Response.json({ success: false, error: 'Post not found' }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
