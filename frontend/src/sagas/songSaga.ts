import { call, put, takeLatest } from 'redux-saga/effects';
import { setSongs } from '../redux/songsSlice';
import { setStatistics } from '../redux/statisticsSlice';
import { fetchSongs, fetchStatistics } from '../services/songService';

function* handleFetchSongs(): Generator<any, void, any> {
        try {
            const songs = yield call(fetchSongs);
            yield put(setSongs(songs));
        } catch (error) {
                yield put(setSongs([]));
        }
    }
  

function* handleFetchStatistics(): Generator<any, void, any> {
    try {
        const statistics = yield call(fetchStatistics);
        yield put(setStatistics(statistics));
    } catch (error) {
            yield put(setStatistics({ totalSongs: 0, totalArtists: 0, totalAlbums: 0, totalGenres: 0 }));
    }
}
  
  function* songSaga() {
    yield takeLatest('songs/fetchSongs', handleFetchSongs);
    yield takeLatest('statistics/fetchStatistics', handleFetchStatistics);
  }
  
  export default songSaga;