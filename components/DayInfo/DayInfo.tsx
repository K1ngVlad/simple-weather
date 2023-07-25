import { FC } from 'react';
import Image from 'next/image';

import { DayGraph } from './DayGraph';

import umbrella from '@/assets/umbrella.svg';
import s from './DayInfo.module.scss';
import { dayInfoInterface } from './interface';

const DayInfo: FC<dayInfoInterface> = (props) => {
  return (
    <section className={s.dayInfo}>
      <h3>Погода на день</h3>
      <DayGraph
        dayInfo={props.dayInfo}
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
