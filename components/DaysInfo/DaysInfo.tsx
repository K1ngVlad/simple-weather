import { FC } from 'react';

import { days } from './constants';
import { DayElem } from './DayElem';

import s from './DaysInfo.module.scss';

interface props {
  daysInfo: {
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  }[];
}

const DaysInfo: FC<props> = (props) => {
  return (
    <section>
      {props.daysInfo.map((day, index) => (
        <DayElem
          condition={day.condition.text}
          text={days[index]}
          max={day.maxtemp_c}
          min={day.mintemp_c}
          key={days[index]}
          icon={day.condition.icon}
        />
      ))}
      <div className={s.bot}>Прогноз погоды на 3 дня</div>
    </section>
  );
};

export { DaysInfo };
