import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ReduxProviderWrapper from 'client/helpers/reduxProviderWrapper';

import routes from './routes';

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// OfflinePluginRuntime.install();

render(
  <ReduxProviderWrapper>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </ReduxProviderWrapper>,
  document.getElementById('app'),
);
