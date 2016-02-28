'use strict';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import * as React from 'react';
import {render} from 'react-dom';
import {App, About, GeneratorApp} from './view';
import store from './store';
import { Provider, connect } from 'react-redux';

//import CSS
import '../css/style.styl';



render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path='/' component={App}>
              <IndexRoute component={GeneratorApp} />
              <Route path='/about' component={About}></Route>
          </Route>
      </Router>
  </Provider>,
  document.querySelector('#app')
);
