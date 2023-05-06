const { createContext, useState } = require('react');

const AccordionContext = createContext();

const AccordionProvider = ({ children }) => {
  const [expanded_1, setExpanded_1] = useState('');
  const [expanded_2, setExpanded_2] = useState('');
  const [expanded_3, setExpanded_3] = useState('');
  return (
    <AccordionContext.Provider
      value={{
        expanded_1,
        setExpanded_1,
        expanded_2,
        setExpanded_2,
        expanded_3,
        setExpanded_3,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

export { AccordionContext, AccordionProvider };
