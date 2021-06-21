import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import comments from './reducers';
import { loadState, saveState } from './localStorage/localStorage';

const persistedState = loadState();

const store = createStore(comments, persistedState);
console.log(store.getState());

store.subscribe(() => {
  saveState(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
