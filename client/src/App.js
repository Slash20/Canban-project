import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kanbanApi } from './api/kanbanApi';
import { setBoards } from './store/slices/kanbanSlice';

import './styles/globalStyles.css';
import './styles/fonts.css';
import { Header, Popup } from './components';
import { Boards } from './components';
import { AccordionProvider } from './contexts';
import { Burger } from './components/Burger/Burger';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const boards = await kanbanApi();
      dispatch(setBoards(boards));
    };
    fetchData();
  });

  return (
    <div className="app">
      <Header>Канбан доска</Header>
      <AccordionProvider>
        <Boards />
      </AccordionProvider>
      <Popup />
      <Burger />
    </div>
  );
};
export default App;
