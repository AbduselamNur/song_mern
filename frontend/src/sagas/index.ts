import { all } from 'redux-saga/effects';
import songSaga from './songSaga';

function* rootSaga() {
    yield all([songSaga()]);
    }

export default rootSaga;