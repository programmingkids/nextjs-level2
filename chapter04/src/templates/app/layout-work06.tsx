import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const notoSansJP400 = Noto_Sans_JP({
  weight: '400',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: 'NextJSレベル2',
    template: '%s | NextJSレベル2',
  },
  description: 'NextJS学習',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP400.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
