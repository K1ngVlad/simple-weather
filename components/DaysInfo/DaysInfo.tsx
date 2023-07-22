import { FC } from 'react';

import { days } from './constants';
import { DayElem } from './DayElem';

import s from './DaysInfo.module.scss';

const DaysInfo: FC = () => {
  return (
    <section>
      {days.map((day) => (
        <DayElem text={day.text} max={day.max} min={day.min} key={day.text} />
      ))}
      <div className={s.bot}>Прогноз погоды на 3 дня</div>
    </section>
  );
};

export { DaysInfo };
