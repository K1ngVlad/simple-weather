import { FC } from 'react';

import sunrise from '@/assets/sunrise.svg';
import sunset from '@/assets/sunset.svg';

import s from './SunInfo.module.scss';
import Image from 'next/image';
import { validateDate } from './helpers';

interface props {
  sunrise: string;
  sunset: string;
  localtime: string;
}

const SunInfo: FC<props> = (props) => {
  const sunriseTime = validateDate(props.sunrise);
  const sunsetTime = validateDate(props.sunset);
  const currentTime = props.localtime.slice(-5);

  const sunriseMinutes =
    Number(sunriseTime.slice(0, 2)) * 60 + Number(sunriseTime.slice(3, 5));
  const sunsetMinutes =
    Number(sunsetTime.slice(0, 2)) * 60 + Number(sunsetTime.slice(3, 5));
  const currentMinutes =
    Number(currentTime.slice(0, 2)) * 60 + Number(currentTime.slice(3, 5));

  const timeIndex =
    currentMinutes < 720
      ? (currentMinutes - sunriseMinutes) / (720 - sunriseMinutes)
      : (currentMinutes - 720) / (sunsetMinutes - 720);

  const botIndex = 4.3;
  const topIndex = 1.3;
  const midIndex = 2;

  const index =
    currentMinutes < 720
      ? botIndex - (botIndex - midIndex) * timeIndex
      : midIndex - (midIndex - topIndex) * timeIndex;

  return (
    <div className={s.sunInfo}>
      <div className={s.container}>
        <Image className={s.sunrise} src={sunrise} alt="sunrise" />
        <Image className={s.sunset} src={sunset} alt="sunset" />
        <div className={s.horison}>
          <div
            style={{
              bottom: `${150 + 150 * Math.sin(Math.PI / index)}px`,
              right: `${150 + 150 * Math.cos(Math.PI / index)}px`,
            }}
            className={s.sun}
          ></div>
        </div>
      </div>
      <div className={s.time}>
        <div>
          <span className={s.name}>Восход</span>
          <span className={s.value}>{sunriseTime}</span>
        </div>
        <div>
          <span className={s.name}>Закат</span>
          <span className={s.value}>{sunsetTime}</span>
        </div>
      </div>
    </div>
  );
};

export { SunInfo };
