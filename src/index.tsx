import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducer';

import App from './components/App';
import './index.scss';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
