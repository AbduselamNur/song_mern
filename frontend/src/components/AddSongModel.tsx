// AddSongModal.tsx
import React, { Dispatch, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, setSongs } from '../redux/songsSlice';
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, StyledButton } from './StyledComponents';
import axios from 'axios';
import { AnyAction } from '@reduxjs/toolkit';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', genre: '' });
  const [isAddingSong, setIsAddingSong] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof newSong) => {
    setNewSong({ ...newSong, [field]: e.target.value });
  };

  const dispatchFetchSongs = async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await axios.get('http://localhost:3001/api/songs');
      dispatch(setSongs(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddSong = async () => {
    if (isAddingSong) return; // Prevent multiple clicks while adding

    if (!newSong.title || !newSong.artist || !newSong.album || !newSong.genre) {
      toast.error('All fields are required');
      return;
    }

    try {
      setIsAddingSong(true); // Disable the button
      const response = await axios.post('http://localhost:3001/api/songs', newSong);
      dispatchFetchSongs(dispatch);
      dispatch(addSong(response.data));
      setNewSong({ title: '', artist: '', album: '', genre: '' });
      onClose();
      toast.success('Song added successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to add song');
    } finally {
      setIsAddingSong(false); // Enable the button after completion
    }
  };

  return (
    <>
      <ToastContainer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>
            Add New Song
            <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <label>Title:</label>
            <Input type="text" value={newSong.title} onChange={(e) => handleInputChange(e, 'title')} />

            <label>Artist:</label>
            <Input type="text" value={newSong.artist} onChange={(e) => handleInputChange(e, 'artist')} />

            <label>Album:</label>
            <Input type="text" value={newSong.album} onChange={(e) => handleInputChange(e, 'album')} />

            <label>Genre:</label>
            <Input type="text" value={newSong.genre} onChange={(e) => handleInputChange(e, 'genre')} />

            <StyledButton onClick={handleAddSong} disabled={isAddingSong}>
              Add Song
            </StyledButton>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSongModal;
