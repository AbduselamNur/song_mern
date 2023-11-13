import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/rootReducer';
import { fetchSongs } from "../services/songService";
import { Table, TableRow, TableHeader, TableData, StyledButton, DeleteButton,  } from './StyledComponents';
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import AddSongModal from "./AddSongModel";
import { removeSong, setSongs } from "../redux/songsSlice";
import axios from 'axios';
import UpdateSongModal from "./UpdateSongModal";


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
    const [isAddSongModalOpen, setAddSongModalOpen] = useState(false);
    const [songToDelete, setSongToDelete] = useState('' as string);
    const [isUpdateSongModalOpen, setUpdateSongModalOpen] = useState(false);
    const [selectedSong, setSelectedSong] = useState({} as any);

    const handleAddSongModalOpen = () => {
      setAddSongModalOpen(true);
    };
  
    const handleAddSongModalClose = () => {
      setAddSongModalOpen(false);
    };

    const handleUpdateSongModalOpen = (song: any) => {
        setSelectedSong(song);
        setUpdateSongModalOpen(true);
        }
    
    const handleUpdateSongModalClose = () => {
        setUpdateSongModalOpen(false);
        };


    const handleDeleteSong = async (songId: string) => {
        try {
            const response = await axios.delete(`http://localhost:3001/api/songs/${songId}`);
            dispatchFetchSongs(dispatch);
            dispatch(removeSong(response.data));
            setSongToDelete('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteIconClick = (songId: string) => {
        setSongToDelete(songId);
    };
   

    return (
        <div>
        <h1>Songs</h1>
        <StyledButton onClick={handleAddSongModalOpen}>Add Song</StyledButton>
        <Table>
            <TableRow>
                <TableHeader>Title</TableHeader>
                <TableHeader>Artist</TableHeader>
                <TableHeader>Genre</TableHeader>
                <TableHeader>Album</TableHeader>
                </TableRow>
                {songs.map((song, index) => (
                    <TableRow key={index}>
                        <TableData>{song.title}</TableData>
                        <TableData>{song.artist}</TableData>
                        <TableData>{song.genre}</TableData>
                        <TableData>{song.album}</TableData>
                        <TableData>
                            <StyledButton onClick={() => handleUpdateSongModalOpen(song)}>Edit</StyledButton>
                            <DeleteButton onClick={() => handleDeleteSong(song._id || '')}>Delete</DeleteButton>
                        </TableData>
                    </TableRow>
                ))}
        </Table>
        <AddSongModal isOpen={isAddSongModalOpen} onClose={handleAddSongModalClose} />
        <UpdateSongModal isOpen={isUpdateSongModalOpen} onClose={handleUpdateSongModalClose} song={selectedSong} />
        {/* {songToDelete && (
        <div>
          <p>Are you sure you want to delete the song "{songToDelete}"?</p>
        <StyledButton onClick={handleDeleteSong}>Yes</StyledButton>
                            <StyledButton onClick={() => setSongToDelete('')}>No</StyledButton>
                        </div>
                    )} */}
                        </div>
                )
        }

        export default SongList;
        const dispatchFetchSongs = async (dispatch: Dispatch<AnyAction>) => {
            try {
              const response = await axios.get('http://localhost:3001/api/songs');
              dispatch(setSongs(response.data));
            } catch (error) {
              console.error(error);
            }
          };

