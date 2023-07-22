import { FC } from 'react';
import Image from 'next/image';

import bubble from '@/assets/bubble.svg';

import s from './AirQuality.module.scss';

const AirQuality: FC = () => {
  return (
    <section className={s.airQuality}>
      <div className={s.top}>
        <Image src={bubble} alt="Air quality" />
        <h3>Качество воздуха</h3>
      </div>
      <div className={s.quality}>Хорошее 46</div>
      <div className={s.bar}>
        <div className={s.ball}></div>
      </div>
    </section>
  );
};

export { AirQuality };
