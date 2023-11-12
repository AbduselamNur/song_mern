import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectId } from 'mongodb';

interface Song {
    _id?: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
}

const initialState: Song[] = [];

const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setSongs: (state, action: PayloadAction<Song[]>) => {
            console.log(action.payload);
            return action.payload;
        },
        addSong(state, action: PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong(state, action: PayloadAction<number>) {
            state.splice(action.payload, 1);
        },
        updateSong(state, action: PayloadAction<{ index: number; song: Song }>) {
            state[action.payload.index] = action.payload.song;
        },
    },
});

export const { setSongs, addSong, removeSong, updateSong } = songsSlice.actions;
export default songsSlice.reducer;