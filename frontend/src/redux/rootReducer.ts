import { combineReducers } from '@reduxjs/toolkit';
import songsReducer from './songsSlice';
import statisticsReducer from './statisticsSlice';

const rootReducer = combineReducers({
    songs: songsReducer,
    statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;