import { createContext, useState } from 'react';

const BurgerContext = createContext();

const BurgerProvider = ({ children }) => {
  const [burger, setBurger] = useState(false);

  const openBurger = () => setBurger(true);
  const closeBurger = () => setBurger(false);

  return (
    <BurgerContext.Provider
      value={{
        burger,
        openBurger,
        closeBurger,
      }}
    >
      {children}
    </BurgerContext.Provider>
  );
};

export { BurgerContext, BurgerProvider };
