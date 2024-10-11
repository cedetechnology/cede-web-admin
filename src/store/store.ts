'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import storage from '@/store/customStorage';

import {
  BLACKLIST_USER_REDUCER_PATH,
  BUSINESS_VERIFICATION_REDUCER_PATH,
  DELETE_BLOG_REDUCER_PATH,
  EDIT_EXCHANGE_RATE_REDUCER_PATH,
  GLOBAL_API_REDUCER_PATH,
  LOGIN_REDUCER_PATH,
  PROFILE_SETTINGS_REDUCER_PATH,
  RATE_DETAILS_REDUCER_PATH,
  TEAM_SETTINGS_REDUCER_PATH,
  TRANSACTION_DETAILS_REDUCER_PATH,
} from '@/constant/appConstants';
import { blacklistReducer } from '@/slices/blacklistUser';
import { businessVerificationReducer } from '@/slices/businessVerificationSlice';
import { deleteBlogReducer } from '@/slices/deleteBlogSlice';
import { editExchangeRateReducer } from '@/slices/editExchangeRateSlice';
import { loginReducer } from '@/slices/loginSlice';
import { profileSettingsReducer } from '@/slices/profleSettingsSlice';
import { rateDetailsReducer } from '@/slices/rateDetails';
import { teamSettingsReducer } from '@/slices/teamSettingsSlice';
import { transactionDetailsReducer } from '@/slices/transactionDetailsSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: [
    GLOBAL_API_REDUCER_PATH,
    LOGIN_REDUCER_PATH,
    BLACKLIST_USER_REDUCER_PATH,
    TRANSACTION_DETAILS_REDUCER_PATH,
    EDIT_EXCHANGE_RATE_REDUCER_PATH,
    RATE_DETAILS_REDUCER_PATH,
    BUSINESS_VERIFICATION_REDUCER_PATH,
    PROFILE_SETTINGS_REDUCER_PATH,
    TEAM_SETTINGS_REDUCER_PATH,
    DELETE_BLOG_REDUCER_PATH,
  ],
};

const rootReducer = combineReducers({
  // [globalApi.reducerPath]: globalApi.reducer,
  [LOGIN_REDUCER_PATH]: loginReducer,
  [BLACKLIST_USER_REDUCER_PATH]: blacklistReducer,
  [TRANSACTION_DETAILS_REDUCER_PATH]: transactionDetailsReducer,
  [EDIT_EXCHANGE_RATE_REDUCER_PATH]: editExchangeRateReducer,
  [RATE_DETAILS_REDUCER_PATH]: rateDetailsReducer,
  [BUSINESS_VERIFICATION_REDUCER_PATH]: businessVerificationReducer,
  [PROFILE_SETTINGS_REDUCER_PATH]: profileSettingsReducer,
  [TEAM_SETTINGS_REDUCER_PATH]: teamSettingsReducer,
  [DELETE_BLOG_REDUCER_PATH]: deleteBlogReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const concatMiddleWare = [globalApi.middleware];

// if (!isProd) {
//   concatMiddleWare.push(logger);
// }

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  // .concat(concatMiddleWare),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
