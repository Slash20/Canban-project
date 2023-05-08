import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kanbanApi } from './api/kanbanApi';
import { setBoards } from './store/slices/kanbanSlice';

import './styles/globalStyles.css';
import './styles/fonts.css';
import { Header, Popup } from './components';
import { Burger } from './components/Burger/Burger';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

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
      <Routes>
        {routes.map((e) => (
          <Route key={e.name} path={e.path} element={e.elem} />
        ))}
      </Routes>
      <Popup />
      <Burger />
    </div>
  );
};
export default App;
