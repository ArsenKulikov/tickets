import { combineReducers } from 'redux';
import { currencyReducer } from './reducers';
import { visibilityFilterReducer } from './reducers';

export default combineReducers({
  visibilityFilterReducer,
  currencyReducer
});
