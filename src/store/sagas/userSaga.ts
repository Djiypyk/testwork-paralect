import {SagaIterator} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {UserT} from "../../types/UserT";
import {userApi} from "../../api/userApi";
import {setUserInfo} from "../reducers/userReducer";
import {EUserSaga} from "../../enum/EUserSaga";


function* userWorker({payload}: SetUserInfoST) {
    try {
        // @ts-ignore
        const res: UserT = yield call(userApi.getUser,payload)
        yield put(setUserInfo(res))
    } catch (e) {
        // yield put(setError((e as AxiosError)))
    }
}

export function* userWatcher(): SagaIterator {
    yield takeLatest(EUserSaga.SetUser, userWorker)
}

export const setUserInfoS = (payload: string) => ({type: EUserSaga.SetUser, payload} as const)
type SetUserInfoST = ReturnType<typeof setUserInfoS>

