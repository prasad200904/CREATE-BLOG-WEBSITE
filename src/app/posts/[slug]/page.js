import { dbConnect } from "@/lib/dbConnect";
import Post from "@/model/Post";

// ✅ mark this as async
export async function generateMetadata({ params }) {
  const slug = decodeURIComponent(params.slug || "");
  return {
    title: slug,
    description: `Read the blog post: ${slug}`,
  };
}

export default async function PostPage({ params }) {
  await dbConnect();

  const slug = decodeURIComponent(params?.slug || "");
  const post = await Post.findOne({ slug });

  if (!post) {
    return <div style={{ padding: 40 }}>❌ Post not found</div>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>{post.title}</h1>
      <hr />
      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{ marginTop: "20px", lineHeight: "1.6" }}
      />
    </div>
  );
}
