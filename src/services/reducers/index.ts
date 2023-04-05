import { combineReducers } from 'redux';
import { mainStore } from './main';
import { authStore } from './auth';

export const rootReducer = combineReducers({
  auth: authStore,
  main: mainStore
});