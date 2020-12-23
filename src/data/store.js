// imports
import { createStore, compose } from 'redux';
import reducer from './reducer/reducer';
import initial from './initial';

//redux dev tools
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store 
const store = createStore(
    reducer,
    initial,
    composeEnhancers,
);

export default store;