import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import routesApp from './routes'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {routesApp}
    </Provider>,
    document.getElementById('app')
);