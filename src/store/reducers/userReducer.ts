import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserT} from "../../types/UserT";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType,
    errorUser: false,
    findName: '',
    user: {} as UserT,
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<boolean>) => {
            state.errorUser = action.payload
        },
        findUser: (state, action: PayloadAction<string>) => {
            state.findName = action.payload
        },
        setUserInfo: (state, action: PayloadAction<UserT>) => {
            state.user = action.payload
        },
        setRequestStatus: (state, action: PayloadAction<RequestStatusType>) => {
            state.status = action.payload
        }
    },
})
export const userReducer = slice.reducer

export const {setError, setUserInfo, findUser, setRequestStatus} = slice.actions
