import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/rootSaga";
import {userReducer} from "../reducers/userReducer";
import {reposReducer} from "../reducers/reposReducer";


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        users: userReducer,
        repos: reposReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
