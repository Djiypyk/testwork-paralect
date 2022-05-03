import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RepoT} from "../../types/RepoT";

const initialState = {
    repos: [] as RepoT[],
    currentPage: 2,
    repoSizeForPage: 4,
    totalRepoCount: 0,
}

const slice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setRepos: (state, action: PayloadAction<RepoT[]>) => {
            state.repos = action.payload
        },
        paginationChange: (state, action: PayloadAction<number>) => {
            debugger
            state.currentPage = action.payload
        }
    },
})
export const reposReducer = slice.reducer
export const {setRepos, paginationChange} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
