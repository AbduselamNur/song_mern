import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../redux/rootReducer';
import { fetchSongs } from "../services/songService";
import { Table, TableRow, TableHeader, TableData, StyledButton,
         DeleteButton, FlexContainer, ContentContainer } from './StyledComponents';
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import AddSongModal from "./AddSongModel";
import { removeSong, setSongs } from "../redux/songsSlice";
import axios from 'axios';
import Sidebar from "./SideBar";
import { useLocation } from "react-router-dom";
import StatisticsCard from "./StatisticsCard";
import UpdateSongModal from "./UpdateSongModal";
import GenreStatistics from './GenreStatistics';
import AlbumStatistics from './AlbumStatistics';
import ArtistStatistics from "./ArtistStatistics";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SongList = () => {
    const location = useLocation();
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
            toast.success('Song deleted successfully');
            dispatchFetchSongs(dispatch);
            dispatch(removeSong(response.data));
            setSongToDelete('');
        } catch (error) {
            console.error(error);
            toast.error('Failed to delete song');

        }
    };

    const handleDeleteIconClick = (songId: string) => {
        setSongToDelete(songId);
    };
    
    const shouldRenderStatisticsCard = location.pathname === '/';
    const shouldRenderGenreStatistics = location.pathname === '/genre';
    const shouldRenderAlbumStatistics = location.pathname === '/album';
    const shouldRenderArtistStatistics = location.pathname === '/artist';
   

    return (
        <div>
            <Sidebar />
            <ContentContainer>
            {shouldRenderStatisticsCard && (<><h1>Songs</h1>
                <StatisticsCard apiUrl="http://127.0.0.1:3001/api/statistics/" title="Overall Statistics:" /></>)}
            {shouldRenderGenreStatistics && (<><h1>Genres</h1>
                <GenreStatistics apiUrl="http://127.0.0.1:3001/api/statistics/" /></>)}
            {shouldRenderAlbumStatistics && (<><h1>Album</h1>
                <AlbumStatistics apiUrl="http://127.0.0.1:3001/api/statistics" /></>)}
            {shouldRenderArtistStatistics && (<><h1>Artist</h1>
                <ArtistStatistics apiUrl="http://127.0.0.1:3001/api/statistics" /></>)}
            <FlexContainer>
                <StyledButton onClick={handleAddSongModalOpen}>Add Song</StyledButton>
            </FlexContainer>
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
        </ContentContainer>
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