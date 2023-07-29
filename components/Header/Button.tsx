'use client';

import { FC, useContext } from 'react';
import Image from 'next/image';
import { BurgerContext } from '@/providers';

import burger from '@/assets/burger.svg';

interface props {
  className: string;
}

const Button: FC<props> = (props) => {
  const { openBurger } = useContext(BurgerContext);

  return (
    <button onClick={openBurger} className={props.className}>
      <Image priority src={burger} alt="Open burger-menu" />
    </button>
  );
};

export { Button };
