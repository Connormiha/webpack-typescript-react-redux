import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import * as React from 'react';
import {render} from 'react-dom';
import {App, GeneratorApp} from 'components/page/entry';
import About from 'components/page/about';
import store from './store';
import {Provider} from 'react-redux';

// import CSS
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
