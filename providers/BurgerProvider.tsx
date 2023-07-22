'use client';

import { FC, createContext, useState } from 'react';

interface ItemsContext {
  closeBurger: () => void;
  openBurger: () => void;
  toggleBurger: () => void;
}

const BurgerContext = createContext<ItemsContext>({
  openBurger: () => {},
  closeBurger: () => {},
  toggleBurger: () => {},
});

interface props {
  children: React.ReactNode;
  component: React.ReactNode;
}

const BurgerProvider: FC<props> = (props) => {
  const { children, component } = props;
  const [burger, setBurger] = useState(false);

  const closeBurger = () => setBurger(false);
  const openBurger = () => {
    console.log('окно открыто');
    setBurger(true);
  };
  const toggleBurger = () => setBurger((e) => !e);

  return (
    <BurgerContext.Provider
      value={{
        closeBurger,
        openBurger,
        toggleBurger,
      }}
    >
      {burger && component}
      {children}
    </BurgerContext.Provider>
  );
};

export { BurgerProvider, BurgerContext };
