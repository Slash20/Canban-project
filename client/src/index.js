import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { BurgerProvider, PopupProvider } from './contexts';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PopupProvider>
      <BurgerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BurgerProvider>
    </PopupProvider>
  </Provider>
);
