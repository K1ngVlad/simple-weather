'use client';

import { FC, useEffect } from 'react';

interface props {
  lang: string;
  children: React.ReactNode;
}

const SaveLang: FC<props> = (props) => {
  const { children, lang } = props;
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, []);
  return <>{children}</>;
};

export { SaveLang };
