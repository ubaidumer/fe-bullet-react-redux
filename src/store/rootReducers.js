import { combineReducers } from '@reduxjs/toolkit';
import { reducer as headlineReducer } from '../slices/headline';
import { reducer as pointReducer } from '../slices/point';

const rootReducer = combineReducers({
  headline: headlineReducer,
  point: pointReducer
});

export default rootReducer;
