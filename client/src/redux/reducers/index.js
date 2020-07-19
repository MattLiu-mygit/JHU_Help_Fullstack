import { combineReducers } from 'redux';
import searchterm from './searchReducer';

const rootReducer = combineReducers({
  searchterm,
});

export default rootReducer;
