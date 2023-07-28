import { FC } from 'react';
import Image from 'next/image';

import umbrella from '@/assets/umbrella.svg';

import s from './HourElem.module.scss';

interface props {
  time: string;
  probality: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
}

const HourElem: FC<props> = (props) => {
  const { time, probality, condition } = props;
  return (
    <div className={s.hourElem}>
      <span className={s.time}>{time}</span>
      <img className={s.icon} alt={condition.text} src={condition.icon} />
      <div className={s.probality}>
        <Image src={umbrella} alt="probality" />
        <span>{`${probality}%`}</span>
      </div>
    </div>
  );
};

export { HourElem };
