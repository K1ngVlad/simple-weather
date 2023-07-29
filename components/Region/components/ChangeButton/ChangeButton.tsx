'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import s from './ChangeButton.module.scss';

interface props {
  lang: string;
}

const ChangeButton: FC<props> = ({ lang }) => {
  const { push } = useRouter();

  const onClickHeandler = () => push(`/${lang}/search`);

  return (
    <button onClick={onClickHeandler} className={s.changeButton}>
      Нет, это не мой регион
      <br /> Выбрать другой
    </button>
  );
};

export { ChangeButton };
