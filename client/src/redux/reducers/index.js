import { combineReducers } from 'redux';
import searchterm from './searchReducer';
import searchResults from './searchResultsReducer';

const rootReducer = combineReducers({
  searchterm,
  searchResults,
});

export default rootReducer;
