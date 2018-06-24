import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import getCart from './getCart';

const reducers = combineReducers({
  routerReducer,
  getCart,
});

export default reducers;
