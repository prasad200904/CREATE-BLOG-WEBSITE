import { dbConnect } from "@/lib/dbConnect";
import Post from "@/model/Post";
import slugify from "slugify";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("📥 API received:", body);

    const slug = slugify(body.title, { lower: true, strict: true });

    await dbConnect();

    const newPost = new Post({
      title: body.title,
      content: body.content,
      slug,
    });

    const savedPost = await newPost.save();
    console.log("✅ Saved post:", savedPost);

    return Response.json({ success: true, post: savedPost }, { status: 201 });
  } catch (error) {
    console.error("❌ API Error:", error.message);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
