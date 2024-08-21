import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Combining all reducers
const rootReducer = combineReducers({ user: userReducer })

// Persisting the store
const persistConfig = {
    key: 'root',
    storage,
    version: 1
}

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Creating the store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

// Exporting the store and persistor
export const persistor = persistStore(store);