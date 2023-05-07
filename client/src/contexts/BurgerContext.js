import { createContext } from 'react';

const BurgerContext = createContext();

const BurgerProvider = ({ children }) => {
  return <BurgerContext.Provider>{children}</BurgerContext.Provider>;
};

export { BurgerContext, BurgerProvider };
