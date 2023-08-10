import Footer from '@/components/footer';
import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/navbar';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Ecommerce Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
