import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { addressReducer } from './address.slice';

const rootReducer = combineReducers({
  addressReducer,
});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
