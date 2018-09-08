import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from 'client/components/layout/layout';
import IndexPage from 'client/pages/index-page';
import StyleGuide from 'client/pages/styleGuide/styleGuide';
import NoMatch from 'client/pages/noMatch/noMatch';

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
