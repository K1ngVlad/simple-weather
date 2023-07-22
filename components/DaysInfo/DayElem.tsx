import { FC } from 'react';

import s from './DayElem.module.scss';

interface props {
  text: string;
  max: number;
  min: number;
}

const DayElem: FC<props> = (props) => {
  const { text, max, min } = props;
  return (
    <div className={s.DayElem}>
      <span className={s.dayText}>{text}</span>
      <div className={s.dayInfo}>
        <img
          alt="Облачно"
          src="//cdn.weatherapi.com/weather/64x64/day/116.png"
        />
        <span>Облачно</span>
        <span>{`${max}° / ${min}°`}</span>
      </div>
    </div>
  );
};

export { DayElem };
