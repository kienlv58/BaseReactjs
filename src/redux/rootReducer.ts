import { combineReducers } from '@reduxjs/toolkit';

import homeDataReducer from 'src/containers/Home/homeDataSlice';

const rootReducer = combineReducers({
  homeData: homeDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
