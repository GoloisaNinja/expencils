import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

// STORE CREATION

export default () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};
