import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './pages/layout/layout';
import IndexPage from './pages/index-page';
import StyleGuide from './pages/style-guide';
import NoMatch from './pages/noMatch/noMatch';

export default (
  <Route render={({ location }) => (
    <Layout>
      <Switch location={location} key={location.pathname}>
        <Route path="/" component={IndexPage} exact />
        <Route path="/styles" component={StyleGuide} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  )}
  />
);
