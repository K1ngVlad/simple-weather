import { FC } from 'react';

import s from './Region.module.scss';
import { AgreeButton, ChangeButton } from './components';
import { Reg } from './components/Reg';

interface props {
  lang: string;
}

const Region: FC<props> = ({ lang }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  return (
    <section className={s.region}>
      <h2 className={s.title}>Ваш регион:</h2>
      <Reg apiKey={apiKey} />
      <AgreeButton lang={lang} />
      <ChangeButton lang={lang} />
    </section>
  );
};

export { Region };
