// src/app/layout.js
import './globals.css';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export const metadata = {
  title: 'My Blog',
  description: 'Created by Prasad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Background image and overlay wrapper */}
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
          
          {/* Background Image */}
          <Image
            src="/background.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          {/* Overlay text */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            textAlign: 'center',
            fontSize: '32px',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
            zIndex: 10,
          }}>
            Welcome to My Blog ✨
          </div>

          {/* Navbar and page content */}
          <div style={{ position: 'relative', zIndex: 20 }}>
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
