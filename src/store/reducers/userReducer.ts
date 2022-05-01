import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {UserT} from "../../types/UserT";

const initialState = {
    isInitialized: false,
    error: '',
    findName: '',
    user: {} as UserT,
    // user: {
    //     "login": "Djiypyk",
    //     "id": 81639108,
    //     "node_id": "MDQ6VXNlcjgxNjM5MTA4",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/81639108?v=4",
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/Djiypyk",
    //     "html_url": "https://github.com/Djiypyk",
    //     "followers_url": "https://api.github.com/users/Djiypyk/followers",
    //     "following_url": "https://api.github.com/users/Djiypyk/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/Djiypyk/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/Djiypyk/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/Djiypyk/subscriptions",
    //     "organizations_url": "https://api.github.com/users/Djiypyk/orgs",
    //     "repos_url": "https://api.github.com/users/Djiypyk/repos",
    //     "events_url": "https://api.github.com/users/Djiypyk/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/Djiypyk/received_events",
    //     "type": "User",
    //     "site_admin": false,
    //     "name": "MIKALAI ZARAZAKA",
    //     "company": null,
    //     "blog": "",
    //     "location": "Belarus, Rechitsa",
    //     "email": null,
    //     "hireable": null,
    //     "bio": "Hi There. I am a Frontend Developer. ",
    //     "twitter_username": null,
    //     "public_repos": 11,
    //     "public_gists": 0,
    //     "followers": 11,
    //     "following": 10,
    //     "created_at": "2021-03-30T15:51:32Z",
    //     "updated_at": "2022-04-23T14:16:18Z"
    // } as UserT,
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
            debugger
            state.user = action.payload
        }
    },
})

export const userReducer = slice.reducer

export const {setInitializeAC, setError, setUserInfo} = slice.actions


// export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
