import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import contactsReducer from './contacts/contacts-reducer';
import authReduce from './auth/auth-reducer';

import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}


const rootReduser = combineReducers({
    auth: persistReducer(authPersistConfig, authReduce),
    contacts: contactsReducer,
})

export const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger),
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);

