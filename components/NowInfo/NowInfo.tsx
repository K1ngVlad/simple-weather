import { FC } from 'react';

import s from './NowInfo.module.scss';

const NowInfo: FC = () => {
  return (
    <section className={s.nowInfo}>
      <div className={s.box}>
        <div className={s.date}>
          <span className={s.day}>пт 21 июл. 2023г.</span>
          <span className={s.time}>20:41</span>
        </div>
        <div className={s.temp}>22</div>
        <div className={s.weather}>
          <img
            src="//cdn.weatherapi.com/weather/64x64/day/116.png"
            alt="weather"
          />
          <span>Облачно</span>
        </div>
      </div>
      <div className={s.info}>
        <div className={s.picks}>
          <span>Макс: 25°</span>
          <span>Мин: 14°</span>
        </div>
        <div className={s.wind}>
          <span>Ветер: Юго-запад 16 км/ч</span>
        </div>
      </div>
    </section>
  );
};

export { NowInfo };
