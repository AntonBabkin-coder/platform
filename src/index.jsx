import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducer } from './reducer';
import { App } from './App';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log('Middlewear', store.getState());
  return result;
};

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, Thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
