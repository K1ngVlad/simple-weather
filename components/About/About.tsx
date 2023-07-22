import { FC } from 'react';

import s from './About.module.scss';
import { info } from './constants';
import { InfoElem } from './InfoElem';
import { SunInfo } from './SunInfo';

const About: FC = () => {
  return (
    <section className={s.about}>
      <h3 className={s.title}>О погоде</h3>
      <div className={s.container}>
        {info.map((e) => (
          <InfoElem img={e.img} name={e.name} value={e.value} key={e.name} />
        ))}
      </div>
      <SunInfo />
    </section>
  );
};

export { About };
