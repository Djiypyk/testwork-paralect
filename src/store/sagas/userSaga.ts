import {SagaIterator} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {UserT} from "../../types/UserT";
import {userApi} from "../../api/userApi";
import {setError, setRequestStatus, setUserInfo} from "../reducers/userReducer";
import {ESaga} from "../../enum/ESaga";
import {AxiosError, AxiosResponse} from "axios";


function* userWorker({payload}: SetUserInfoST): Generator {
    yield put(setRequestStatus('loading'))
    yield put(setError(false))
    try {
        // @ts-ignore
        const res: AxiosResponse<UserT> = yield call(userApi.getUser, payload)
        yield put(setRequestStatus('succeeded'))
        yield put(setUserInfo(res.data))
    } catch (e) {
        yield put(setRequestStatus('failed'))
        if ((e as AxiosError)?.response?.status === 404) {
            yield put(setError(true))
        }
        console.warn(e as AxiosError)
    } finally {
        yield put(setRequestStatus('idle'))
    }
}
export function* userWatcher(): SagaIterator {
    yield takeLatest(ESaga.SetUser, userWorker)
}

export const setUserInfoS = (payload: string) => ({type: ESaga.SetUser, payload} as const)
type SetUserInfoST = ReturnType<typeof setUserInfoS>

