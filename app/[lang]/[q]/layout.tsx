import { BurgerMenu, Header } from '@/components';
import { BurgerProvider } from '@/providers';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <BurgerProvider component={<BurgerMenu />}>
        <Header />
      </BurgerProvider> */}
      {children}
    </>
  );
}
