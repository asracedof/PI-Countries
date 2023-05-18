import { createStore, applyMiddleware } from 'redux';
import reducer from '../redux/reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from '../redux/reducer';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

// export default store;