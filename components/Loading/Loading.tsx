import Image from 'next/image';
import { FC } from 'react';

import loading from '@/assets/loading.svg';

import s from './Loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={s.loading}>
      <Image src={loading} alt="Loading" />
    </div>
  );
};

export { Loading };
