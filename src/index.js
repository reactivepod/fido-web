import 'normalize.css/normalize.css';
import 'ladda/dist/ladda.min.css';
import './fido.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import * as storage from 'redux-storage';
import configureStore from './store/configureStore';
import createEngine from 'redux-storage/engines/localStorage';

const engine = createEngine('fido');
const load = storage.createLoader(engine);
const store = configureStore();

load(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
