'use client';

import { FC, useContext } from 'react';
import Link from 'next/link';
import { BurgerContext } from '@/providers';

interface props {
  className: string;
  href: string;
  children: React.ReactNode;
}

const PageLink: FC<props> = (props) => {
  const { children, className, href } = props;
  const { closeBurger } = useContext(BurgerContext);
  return (
    <li className={className}>
      <Link onClick={closeBurger} href={href}>
        {children}
      </Link>
    </li>
  );
};

export { PageLink };
