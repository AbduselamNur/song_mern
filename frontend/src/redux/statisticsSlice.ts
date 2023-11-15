import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Statistics {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}

const initialState: Statistics = {
  totalSongs: 0,
  totalArtists: 0,
  totalAlbums: 0,
  totalGenres: 0,
};

const statisticsSlice = createSlice({
    name: 'statistics',
    initialState,
    reducers: {
        setStatistics(state, action: PayloadAction<Statistics>) {
            return { ...state, ...action.payload };
        },
    },
});

export const { setStatistics } = statisticsSlice.actions;
export default statisticsSlice.reducer;