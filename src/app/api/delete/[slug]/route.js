import { dbConnect } from "@/lib/dbConnect";
import Post from "@/model/Post";

export async function DELETE(request, { params }) {
  try {
    await dbConnect();

    const result = await Post.findOneAndDelete({ slug: params.slug });

    if (!result) {
      return Response.json({ success: false, message: "Post not found" }, { status: 404 });
    }

    return Response.json({ success: true, message: "Post deleted" }, { status: 200 });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
