import {all} from 'redux-saga/effects'
import {userWatcher} from "./userSaga";
import {reposWatcher} from "./reposSaga";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
    yield all([
        userWatcher(),
        reposWatcher(),
        // reposFixCountWatcher(),
    ])
}
