import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import emailReducer from '../redux/reducers/emailReducer';

const reducer = combineReducers({
  email: emailReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;