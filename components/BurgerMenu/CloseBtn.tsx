'use client';

import { FC, useContext } from 'react';
import Image from 'next/image';

import { BurgerContext } from '@/providers';
import cross from '@/assets/cross.svg';

interface props {
  className: string;
}

const CloseBtn: FC<props> = (props) => {
  const { closeBurger } = useContext(BurgerContext);
  return (
    <button onClick={closeBurger} className={props.className}>
      <Image src={cross} alt="Close burger menu" />
    </button>
  );
};

export { CloseBtn };
