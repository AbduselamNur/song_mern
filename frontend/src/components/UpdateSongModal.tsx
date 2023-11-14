// UpdateSongModal.tsx
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSongs, updateSong } from '../redux/songsSlice';
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, StyledButton } from './StyledComponents';
import axios from 'axios';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UpdateSongModalProps {
  isOpen: boolean;
  onClose: () => void;
  song: {
    _id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  };
}

const UpdateSongModal: React.FC<UpdateSongModalProps> = ({ isOpen, onClose, song }) => {
  const dispatch = useDispatch();
  const [updatedSong, setUpdatedSong] = useState({ ...song });
  const [isUpdatingSong, setIsUpdatingSong] = useState(false);

  useEffect(() => {
    setUpdatedSong({ ...song });
  }, [song]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof updatedSong) => {
    setUpdatedSong({ ...updatedSong, [field]: e.target.value });
  };

  const dispatchFetchSongs = async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get('http://localhost:3001/api/songs');
      dispatch(setSongs(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateSong = async () => {
    if (isUpdatingSong) return;
    if (!updatedSong.title || !updatedSong.artist || !updatedSong.album || !updatedSong.genre) {
      toast.error('All fields are required');
      return;
    }
  
    try {
      setIsUpdatingSong(true);
      const response = await axios.put(`http://localhost:3001/api/songs/${song._id}`, updatedSong);
  
      toast.success('Song updated successfully');
      dispatchFetchSongs(dispatch);
      dispatch(updateSong(response.data));
    } catch (error) {
      toast.error('Failed to update song');
    } finally {
      setIsUpdatingSong(false);
      onClose();
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            Update Song
            <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <label>Title:</label>
            <Input type="text" value={updatedSong.title} onChange={(e) => handleInputChange(e, 'title')} />

            <label>Artist:</label>
            <Input type="text" value={updatedSong.artist} onChange={(e) => handleInputChange(e, 'artist')} />

            <label>Album:</label>
            <Input type="text" value={updatedSong.album} onChange={(e) => handleInputChange(e, 'album')} />

            <label>Genre:</label>
            <Input type="text" value={updatedSong.genre} onChange={(e) => handleInputChange(e, 'genre')} />

            <StyledButton onClick={handleUpdateSong} disabled={isUpdatingSong}>
              Update Song
            </StyledButton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateSongModal;
