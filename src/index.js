import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './components/app';
import './components/index.css';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
