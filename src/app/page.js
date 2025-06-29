import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Welcome to My Blog ✨</h1>
      <Link href="/posts" style={{ fontSize: "18px", color: "#0070f3" }}>
        View All Posts →
      </Link>
    </main>
  );
}
