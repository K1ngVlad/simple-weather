import { NavigatorProvider } from '@/providers';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Погода',
  description: 'Погода на сегодня!',
  viewport:
    'width=device-width, initial-scale=1.0, viewport-fit=cover maximum-scale=1',
  keywords: 'weather, погода',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <NavigatorProvider>{children}</NavigatorProvider>
      </body>
    </html>
  );
}
