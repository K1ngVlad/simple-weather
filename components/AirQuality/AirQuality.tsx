import { FC } from 'react';
import Image from 'next/image';
import { getAssessment } from './helpers/getAssessment';

import bubble from '@/assets/bubble.svg';

import s from './AirQuality.module.scss';

interface props {
  air_quality: { [key: string]: number };
}

const AirQuality: FC<props> = (props) => {
  const { no2, pm10, o3 } = props.air_quality;

  const index = Math.round(Math.max(no2, pm10, o3));

  return (
    <section className={s.airQuality}>
      <div className={s.top}>
        <Image src={bubble} alt="Air quality" />
        <h3>Качество воздуха</h3>
      </div>
      <div className={s.quality}>{`${getAssessment(index)} ${index}`}</div>
      <div className={s.bar}>
        <div
          className={s.ball}
          style={{
            left: `${(index / 150) * 100}%`,
          }}
        ></div>
      </div>
    </section>
  );
};

export { AirQuality };
