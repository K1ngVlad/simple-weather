import { FC } from 'react';
import Image from 'next/image';

import { DayGraph } from './DayGraph';

import umbrella from '@/assets/umbrella.svg';
import s from './DayInfo.module.scss';

const DayInfo: FC = () => {
  return (
    <section className={s.dayInfo}>
      <h3>Погода на день</h3>
      <DayGraph hourClassName={s.hourBox} className={s.dayGraph} />
      <div className={s.info}>
        <Image src={umbrella} alt="probality" />
        <span>Вероятность дождя</span>
      </div>
    </section>
  );
};

export { DayInfo };
