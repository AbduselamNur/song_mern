import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/rootReducer';
import { fetchSongs } from "../services/songService";
import { Table, TableRow, TableHeader, TableData } from './StyledComponents';
import { AnyAction, Dispatch } from "@reduxjs/toolkit";


const SongList = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state: RootState) => state.songs);
    React.useEffect(() => {
    const dispatchFetchSongs = async (dispatch: Dispatch<AnyAction>) => {
        const songs = await fetchSongs();
        dispatch({ type: 'FETCH_SONGS_SUCCESS', payload: songs });
    };
        dispatchFetchSongs(dispatch);
    }, [dispatch]);
    console.log(songs);

    return (
        <Table>

            <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Artist</TableHeader>
                <TableHeader>Genre</TableHeader>
                <TableHeader>Album</TableHeader>
            </TableRow>
            {songs.map((song) => (
                <TableRow key={song.title}>
                    <TableData>{song.title}</TableData>
                    <TableData>{song.artist}</TableData>
                    <TableData>{song.genre}</TableData>
                    <TableData>{song.album}</TableData>
                </TableRow>
            ))}
        </Table>
    )
}

export default SongList;