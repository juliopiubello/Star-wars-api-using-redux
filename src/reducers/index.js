import { combineReducers } from 'redux';

import StarReducer from './reducer_stars';

const rootReducer = combineReducers({
  star : StarReducer
});

export default rootReducer;
