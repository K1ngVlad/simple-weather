import { FC } from 'react';

import s from './Search.module.scss';
import { SearchBody } from './SearchBody';

interface props {
  lang: string;
}

const Search: FC<props> = ({ lang }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <section className={s.search}>
      <SearchBody lang={lang} apiKey={apiKey} />
    </section>
  );
};

export { Search };
