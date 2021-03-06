import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';

import App from './App';
import store from './redux/configStore';
import { extendedApiSlice } from './features/cars/carsSlice';
import { extendedFavApiSlice } from './features/cars/myFavoritesSlice';

store.dispatch(extendedApiSlice.endpoints.getCars.initiate());
store.dispatch(extendedFavApiSlice.endpoints.getMyFavorites.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
