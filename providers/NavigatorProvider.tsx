'use client';

import { Dispatch, FC, SetStateAction, createContext, useState } from 'react';

interface nav {
  nav: {
    lat: number | null;
    lon: number | null;
    region: string;
    loading: boolean;
  };
  setNav: Dispatch<
    SetStateAction<{ lat: null; lon: null; region: string; loading: boolean }>
  >;
}

const NavigatorContext = createContext<nav>({
  nav: {
    lat: null,
    lon: null,
    region: 'Moscow',
    loading: true,
  },
  setNav: () => {},
});

interface props {
  children: React.ReactNode;
}

const NavigatorProvider: FC<props> = (props) => {
  const [nav, setNav] = useState({
    lat: null,
    lon: null,
    region: 'Moscow',
    loading: true,
  });

  return (
    <NavigatorContext.Provider value={{ nav, setNav }}>
      {props.children}
    </NavigatorContext.Provider>
  );
};

export { NavigatorProvider, NavigatorContext };
