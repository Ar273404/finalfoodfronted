import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, RouterProvider} from 'react-router-dom';
import StoreContextProvider from './Context/StoreContext';
import {Provider} from 'react-redux'
import store from './Redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StoreContextProvider>
  </BrowserRouter>
);

