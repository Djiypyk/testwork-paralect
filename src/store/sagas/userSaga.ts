import {SagaIterator} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {UserT} from "../../types/UserT";
import {userApi} from "../../api/userApi";
import {setError, setRepos, setUserInfo} from "../reducers/userReducer";
import {EUserSaga} from "../../enum/EUserSaga";
import {AxiosError} from "axios";
import {RepoT} from "../../types/RepoT";


function* userWorker({payload}: SetUserInfoST) {
    try {
        // @ts-ignore
        const res: UserT = yield call(userApi.getUser, payload)
        yield put(setUserInfo(res))
    } catch (e) {
        debugger
        yield put(setError((e as AxiosError).message))
    }
}

export function* userWatcher(): SagaIterator {
    yield takeLatest(EUserSaga.SetUser, userWorker)
}

function* reposWorker({payload}: SetUserReposST) {
    try {
        // @ts-ignore
        const res: RepoT[] = yield call(userApi.getUserRepos, payload)
        yield put(setRepos(res))
    } catch (e) {
        debugger
        yield put(setError((e as AxiosError).message))
    }
}

export function* reposWatcher(): SagaIterator {
    yield takeLatest(EUserSaga.SetRepos, reposWorker)
}
export const setUserInfoS = (payload: string) => ({type: EUserSaga.SetUser, payload} as const)
type SetUserInfoST = ReturnType<typeof setUserInfoS>

export const serUserReposS = (payload: string) => ({type: EUserSaga.SetRepos, payload} as const)
type SetUserReposST = ReturnType<typeof serUserReposS>