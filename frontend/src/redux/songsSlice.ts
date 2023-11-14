import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
            state.length = 0;
            state.push(...action.payload);
        },
        addSong(state, action: PayloadAction<Song>) {
            state.push(action.payload);
        },
        removeSong: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1);
        },
        updateSong(state, action: PayloadAction<{ index: number; song: Song }>) {
            const { index, song } = action.payload;
            if (Number.isInteger(index) && index >= 0 && index < state.length) {
              state[index] = song;
            } else {
              console.error(`Invalid index: ${index}`);
            }
          },
    },
});

export const { setSongs, addSong, removeSong, updateSong } = songsSlice.actions;
export default songsSlice.reducer;