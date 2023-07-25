import { FC } from 'react';

import s from './NowInfo.module.scss';
import { dirs, week } from './constants';

interface props {
  localtime: string;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_kph: number;
  temp_c: number;
  wind_dir: string;
  maxtemp_c: number;
  mintemp_c: number;
}

const NowInfo: FC<props> = (props) => {
  const {
    localtime,
    condition,
    wind_kph,
    temp_c,
    wind_dir,
    maxtemp_c,
    mintemp_c,
  } = props;

  const date = new Date(localtime);

  console.log(date.getDay());

  return (
    <section className={s.nowInfo}>
      <div className={s.box}>
        <div className={s.date}>
          <span className={s.day}>{week[date.getDay()]}</span>
          <span
            className={s.time}
          >{`${date.getHours()}:${date.getMinutes()}`}</span>
        </div>
        <div className={s.temp}>{temp_c}</div>
        <div className={s.weather}>
          <img src={condition.icon} alt={condition.text} />
          <span>{condition.text}</span>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.picks}>
          <span>{`Макс: ${maxtemp_c}`}</span>
          <span>{`Макс: ${mintemp_c}`}</span>
        </div>
        <div className={s.wind}>
          <span>{`Ветер: ${dirs.get(wind_dir)} ${wind_kph} км/ч`}</span>
        </div>
      </div>
    </section>
  );
};

export { NowInfo };
