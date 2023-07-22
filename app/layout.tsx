import { BurgerMenu, Header } from '@/components';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BurgerProvider } from '@/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple weather',
  description: 'Weather for today, tomorrow and for the week!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="background"></div>
        <BurgerProvider component={<BurgerMenu />}>
          <Header />
        </BurgerProvider>
        {children}
      </body>
    </html>
  );
}
