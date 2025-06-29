import { dbConnect } from "@/lib/dbConnect";
import Post from "@/model/Post";

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const body = await request.json();

    const updatedPost = await Post.findOneAndUpdate(
      { slug: params.slug },
      { title: body.title, content: body.content },
      { new: true }
    );

    if (!updatedPost) {
      return Response.json({ success: false, message: "Post not found" }, { status: 404 });
    }

    return Response.json({ success: true, post: updatedPost }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
