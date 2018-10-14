import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const store = createStore(
    reducer,
    compose(composeWithDevTools(applyMiddleware(thunk))),
);

export default store;
