'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useNav } from '@/hooks';

import s from './ArgeeButton.module.scss';

interface props {
  lang: string;
}

const AgreeButton: FC<props> = ({ lang }) => {
  const { nav } = useNav();
  const { push } = useRouter();

  const onClickHeandler = () => push(`/${lang}/${nav.region}`);

  return (
    <button onClick={onClickHeandler} className={s.agreeButton}>
      Да, это мой регион
    </button>
  );
};

export { AgreeButton };
