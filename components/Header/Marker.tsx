'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

import marker from '@/assets/marker.svg';

interface props {
  className: string;
  lang: string;
}

const Marker: FC<props> = (props) => {
  const { className, lang } = props;
  const { push } = useRouter();
  const onClickHeandler = () => {
    localStorage.removeItem('q');
    push(`/${lang}`);
  };

  return (
    <button onClick={onClickHeandler} className={className}>
      <Image src={marker} alt="Change region" />
    </button>
  );
};

export { Marker };
