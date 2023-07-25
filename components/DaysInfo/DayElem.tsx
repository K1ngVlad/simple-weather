import { FC } from 'react';

import s from './DayElem.module.scss';

interface props {
  text: string;
  condition: string;
  icon: string;
  max: number;
  min: number;
}

const DayElem: FC<props> = (props) => {
  const { text, max, min, condition, icon } = props;
  return (
    <div className={s.DayElem}>
      <span className={s.dayText}>{text}</span>
      <div className={s.dayInfo}>
        <img alt={condition} src={icon} />
        <span>{condition}</span>
        <span>{`${max}° / ${min}°`}</span>
      </div>
    </div>
  );
};

export { DayElem };
