import React from 'react';
import Layout from '../components/layout';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';

const App = () => (
  <Layout>
    <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  </Layout>
);

export default App;
