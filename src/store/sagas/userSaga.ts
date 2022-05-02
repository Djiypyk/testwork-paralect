import {SagaIterator} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {UserT} from "../../types/UserT";
import {userApi} from "../../api/userApi";
import {setError, setRepos, setRequestStatus, setUserInfo} from "../reducers/userReducer";
import {EUserSaga} from "../../enum/EUserSaga";
import {AxiosError, AxiosResponse} from "axios";
import {RepoT} from "../../types/RepoT";


function* userWorker({payload}: SetUserInfoST): Generator {
    yield put(setRequestStatus('loading'))
    try {
        // @ts-ignore
        const res: AxiosResponse<UserT> = yield call(userApi.getUser, payload)
        yield put(setRequestStatus('succeeded'))
        console.log(res.data)
        yield put(setUserInfo(res.data))
    } catch (e) {
        yield put(setRequestStatus('failed'))
        yield put(setError((e as AxiosError)?.response?.data))
        console.warn(e as AxiosError)
    } finally {
        yield put(setRequestStatus('idle'))
    }
}

export function* userWatcher(): SagaIterator {
    yield takeLatest(EUserSaga.SetUser, userWorker)
}

function* reposWorker({payload}: SetUserReposST): Generator {
    yield put(setRequestStatus('loading'))
    try {
        // @ts-ignore
        const res: AxiosResponse<RepoT[]> = yield call(userApi.getUserRepos, payload)
        yield put(setRequestStatus('succeeded'))
        yield put(setRepos(res.data))
    } catch (e) {
        yield put(setRequestStatus('failed'))
        yield put(setError((e as AxiosError)?.response?.data))
        console.warn((e as AxiosError)?.response?.data)
    } finally {
        yield put(setRequestStatus('idle'))
    }
}


export function* reposWatcher(): SagaIterator {
    yield takeLatest(EUserSaga.SetRepos, reposWorker)
}

export const setUserInfoS = (payload: string) => ({type: EUserSaga.SetUser, payload} as const)
type SetUserInfoST = ReturnType<typeof setUserInfoS>

export const serUserReposS = (payload: string) => ({type: EUserSaga.SetRepos, payload} as const)
type SetUserReposST = ReturnType<typeof serUserReposS>