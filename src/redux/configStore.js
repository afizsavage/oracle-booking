import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import apiSlice from '../features/api/apiSlice';
import { authApi } from '../features/api/authApi';
import userReducer from './user';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(apiSlice.middleware, authApi.middleware, logger),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export default store;
