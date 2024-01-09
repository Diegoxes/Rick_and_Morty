import { createStore, applyMiddleware } from 'redux'; // Importa applyMiddleware de 'redux'
import favoreducer from '../Reducer/reducer';
import thunk from 'redux-thunk';

export const globalfavorites = createStore(
  favoreducer,
  applyMiddleware(thunk)
);