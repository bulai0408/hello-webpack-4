import { combineReducers } from 'redux';

import recommend from './recommend';
import loading from './loading';
import search from './search';

export default combineReducers({
  recommend,
  loading,
  search
});
