import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserT} from "../../types/UserT";
import {RepoT} from "../../types/RepoT";

const initialState = {
    isInitialized: false,
    error: '',
    findName: '',
    user: {} as UserT,
    repos: [] as RepoT[]
}

const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {

        setError: (state, action: PayloadAction<string>) => {
            debugger
            state.error = action.payload
        },
        findUser: (state, action: PayloadAction<string>) => {
            state.findName = action.payload
        },
        setUserInfo: (state, action: PayloadAction<UserT>) => {
            state.user = action.payload
        },
        setRepos: (state, action: PayloadAction<RepoT[]>) => {
            state.repos = action.payload
        }
    },
})
export const userReducer = slice.reducer

export const {setError, setUserInfo, findUser, setRepos} = slice.actions


// export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
