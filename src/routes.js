import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'src/pages/layout/layout';
import IndexPage from 'src/pages/index-page';
import StyleGuide from 'src/pages/styleGuide/styleGuide';
import NoMatch from 'src/pages/noMatch/noMatch';

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
