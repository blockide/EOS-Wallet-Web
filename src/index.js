import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';

// TODO assess if needed
import registerServiceWorker from './func/registerServiceWorker';

import './styles/index.scss';

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Route component={App} />
  </Router>,
  document.getElementById('root'),
);

registerServiceWorker();
