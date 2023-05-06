import { createContext, useState } from 'react';

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState(null);

  const closePopup = () => setPopup(null);

  return (
    <PopupContext.Provider value={{ popup, setPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider };
