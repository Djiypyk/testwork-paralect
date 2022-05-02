import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserT} from "../../types/UserT";

const initialState = {
    isInitialized: false,
    error: '',
    findName: '',
    user: {} as UserT,
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setInitializeAC: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        },
        findUser: (state, action: PayloadAction<string>) => {
            state.findName = action.payload
        },
        setUserInfo: (state, action: PayloadAction<UserT>) => {
            state.user = action.payload
        }
    },
})

export const userReducer = slice.reducer

export const {setInitializeAC, setError, setUserInfo, findUser} = slice.actions


// export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
