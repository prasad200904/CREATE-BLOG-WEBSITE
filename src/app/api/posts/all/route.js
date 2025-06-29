import { dbConnect } from "@/lib/dbConnect";
import Post from "@/model/Post";

export async function GET() {
  try {
    await dbConnect();
    const posts = await Post.find().sort({ createdAt: -1 });

    return Response.json({ success: true, posts });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
