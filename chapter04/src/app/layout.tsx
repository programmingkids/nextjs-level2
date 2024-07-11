import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const notoSansJP400 = Noto_Sans_JP({
  weight: '400',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP400.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
