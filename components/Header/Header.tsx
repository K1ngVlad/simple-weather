import { FC } from 'react';

import s from './Header.module.scss';
import { Button } from './Button';
import Image from 'next/image';

import marker from '@/assets/marker.svg';

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.background}></div>
      <div className={s.container}>
        <Button className={s.burgerBtn} />
        <h2 className={s.headerTitle}>Самара, Россия</h2>
        <button className={s.markerBtn}>
          <Image src={marker} alt="Change region" />
        </button>
      </div>
    </header>
  );
};

export { Header };
