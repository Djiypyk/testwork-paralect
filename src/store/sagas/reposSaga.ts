import {SagaIterator} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {setRequestStatus} from "../reducers/userReducer";
import {ESaga} from "../../enum/ESaga";
import {AxiosError, AxiosResponse} from "axios";
import {getRepoPayload, RepoT} from "../../types/RepoT";
import {setRepos} from "../reducers/reposReducer";
import {reposApi} from "../../api/reposApi";

function* reposWorker({payload}: SetUserReposST): Generator {
    yield put(setRequestStatus('loading'))
    try {
        // @ts-ignore
        const res: AxiosResponse<RepoT[]> = yield call(reposApi.getUserRepos, payload)
        debugger
        yield put(setRequestStatus('succeeded'))
        yield put(setRepos(res.data))
    } catch (e) {
        yield put(setRequestStatus('failed'))
        console.warn((e as AxiosError)?.response?.data)
    } finally {
        yield put(setRequestStatus('idle'))
    }
}

export function* reposWatcher(): SagaIterator {
    yield takeLatest(ESaga.SetRepos, reposWorker)
}

export const serUserReposS = (payload: Partial<getRepoPayload>) => ({type: ESaga.SetRepos, payload} as const)
type SetUserReposST = ReturnType<typeof serUserReposS>


// function* reposFixCountWorker({payload}: SetFixCountReposST): Generator {
//     yield put(setRequestStatus('loading'))
//     try {
//         // @ts-ignore
//         const res: AxiosResponse<RepoT[]> = yield call(reposApi.getFixRepos, payload)
//         yield put(setRequestStatus('succeeded'))
//         yield put(setRepos(res.data))
//     } catch (e) {
//         yield put(setRequestStatus('failed'))
//         console.warn((e as AxiosError)?.response?.data)
//     } finally {
//         yield put(setRequestStatus('idle'))
//     }
// }
// export function* reposFixCountWatcher(): SagaIterator {
//     yield takeLatest(ESaga.SetFixCount, reposFixCountWorker)
// }
// export const setFixCountReposS = (payload: Partial<getRepoPayload>) => ({type: ESaga.SetRepos, payload} as const)
// type SetFixCountReposST = ReturnType<typeof setFixCountReposS>