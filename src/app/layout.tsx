import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/providers';
import { SITE_CONFIG } from '@/config/site';

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
