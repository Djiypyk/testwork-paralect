import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RepoT} from "../../types/RepoT";

const initialState = {
    repos: [] as RepoT[],
    currentPage: 1,
    repoSizePerPage: 4,
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
            state.currentPage = action.payload
        }
    },
})
export const reposReducer = slice.reducer
export const {setRepos, paginationChange} = slice.actions


