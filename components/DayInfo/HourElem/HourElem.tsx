import { FC } from 'react';
import Image from 'next/image';

import umbrella from '@/assets/umbrella.svg';

import s from './HourElem.module.scss';

interface props {
  time: string;
  probality: number;
}

const HourElem: FC<props> = (props) => {
  return (
    <div className={s.hourElem}>
      <span className={s.time}>{props.time}</span>
      <img
        className={s.icon}
        alt="Облачно"
        src="//cdn.weatherapi.com/weather/64x64/day/116.png"
      />
      <div className={s.probality}>
        <Image src={umbrella} alt="probality" />
        <span>{`${props.probality}%`}</span>
      </div>
    </div>
  );
};

export { HourElem };
