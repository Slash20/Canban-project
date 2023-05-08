import { Boards } from '../components';
import { AccordionProvider } from '../contexts';

const HomePage = () => {
  return (
    <AccordionProvider>
      <Boards />
    </AccordionProvider>
  );
};

export { HomePage };
