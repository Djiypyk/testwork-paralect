import {all} from 'redux-saga/effects'
import {reposWatcher, userWatcher} from "./userSaga";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
    yield all([
        userWatcher(),
        reposWatcher(),
    ])
}
