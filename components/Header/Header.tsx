import { FC } from 'react';

import s from './Header.module.scss';
import { Button } from './Button';
import Image from 'next/image';

import marker from '@/assets/marker.svg';
import { Title } from './Title';
import { Marker } from './Marker';

interface props {
  name: string;
  country: string;
  lang: string;
}

const Header: FC<props> = (props) => {
  const { name, country, lang } = props;
  const title = `${name}, ${country}`;

  return (
    <header className={s.header}>
      <div className={s.background}></div>
      <div className={s.container}>
        <Button className={s.burgerBtn} />
        <Title>{title}</Title>
        <Marker lang={lang} className={s.markerBtn} />
      </div>
    </header>
  );
};

export { Header };
