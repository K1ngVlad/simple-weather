import { FC } from 'react';

import s from './SunInfo.module.scss';

const SunInfo: FC = () => {
  return (
    <div className={s.sunInfo}>
      <div className={s.container}>
        <div className={s.horison}>
          <div
            style={{
              bottom: `${150 + 150 * Math.sin((Math.PI * 2) / 3)}px`,
              right: `${150 + 150 * Math.cos((Math.PI * 2) / 3)}px`,
            }}
            className={s.sun}
          ></div>
        </div>
      </div>
      <div className={s.time}>
        <div>
          <span className={s.name}>Восход</span>
          <span className={s.value}>05:43</span>
        </div>
        <div>
          <span className={s.name}>Закат</span>
          <span className={s.value}>20:20</span>
        </div>
      </div>
    </div>
  );
};

export { SunInfo };
