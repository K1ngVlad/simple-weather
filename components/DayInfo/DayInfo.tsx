import { FC } from 'react';
import Image from 'next/image';

import { DayGraph } from './DayGraph';

import umbrella from '@/assets/umbrella.svg';
import s from './DayInfo.module.scss';
import { dayInfoInterface } from './interface';

const DayInfo: FC<dayInfoInterface> = (props) => {
  const { dayInfo, localtime } = props;

  const index = dayInfo.findIndex(({ time }) => {
    const localHours = Number(localtime.slice(-5, -3));
    const timeHours = Number(time.slice(-5, -3));
    return localHours === timeHours;
  });

  const newDayInfo = dayInfo.slice(index, index + 24);

  return (
    <section className={s.dayInfo}>
      <h3>Погода на 24 часа</h3>
      <DayGraph
        localtime={localtime}
        dayInfo={newDayInfo}
        hourClassName={s.hourBox}
        className={s.dayGraph}
      />
      <div className={s.info}>
        <Image src={umbrella} alt="probality" />
        <span>Вероятность дождя</span>
      </div>
    </section>
  );
};

export { DayInfo };
