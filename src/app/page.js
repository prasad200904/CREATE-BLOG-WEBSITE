'use client';
import Link from "next/link";
import Image from 'next/image';

export default function Home() {
  return (
    <main style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      
      {/* Background Image */}
      <Image
        src="/background.jpg"
        alt="Welcome"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Overlay Text + Link */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "#fff",
        textAlign: "center",
        textShadow: "2px 2px 10px rgba(0,0,0,0.8)"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to My Blog ✨</h1>
        <Link
          href="/posts"
          style={{
            fontSize: "20px",
            color: "#fff",
            padding: "10px 20px",
            backgroundColor: "#0070f3",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          View All Posts →
        </Link>
      </div>
    </main>
  );
}
