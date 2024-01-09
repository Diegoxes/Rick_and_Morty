import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importamos BrowserRouter
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { globalfavorites } from './Redux/Store/store';

ReactDOM.render(
  <Provider store={globalfavorites}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);