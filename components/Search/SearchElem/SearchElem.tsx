'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { Geo } from '@/interfaces';

import s from './SearchElem.module.scss';

interface props {
  geo: Geo;
  lang: string;
}

const SearchElem: FC<props> = (props) => {
  const { geo, lang } = props;
  const { name, region, country } = geo;
  const { push } = useRouter();

  const onClickHeandler = () => push(`/${lang}/${name}`);

  return (
    <div onClick={onClickHeandler} className={s.searchElem}>
      <h3>{name}</h3>
      <span>{`${region}, ${country}`}</span>
    </div>
  );
};

export { SearchElem };
