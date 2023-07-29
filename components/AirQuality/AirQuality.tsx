import { FC } from 'react';
import Image from 'next/image';
import { getAssessment } from './helpers/getAssessment';

import bubble from '@/assets/bubble.svg';

import s from './AirQuality.module.scss';

interface props {
  air_quality: { [key: string]: number };
}

const AirQuality: FC<props> = (props) => {
  const index = props.air_quality['gb-defra-index'];

  const percentIndex = (index / 10) * 100;

  return (
    <section className={s.airQuality}>
      <div className={s.top}>
        <Image src={bubble} alt="Air quality" />
        <h3>{'Загрязнение воздуха (Defra Index)'}</h3>
      </div>
      <div className={s.quality}>{`${getAssessment(index)} ${index}`}</div>
      <div className={s.bar}>
        <div
          className={s.ball}
          style={{
            left: `${percentIndex < 10 ? percentIndex : 10}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export { AirQuality };
