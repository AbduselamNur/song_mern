import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSong } from '../redux/songsSlice';
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, StyledButton } from './StyledComponents';
import axios from 'axios';

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

  useEffect(() => {
    if (!song) {
        onClose();
    } else {
    setUpdatedSong({ ...song });
    }
  }, [song]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof updatedSong) => {
    setUpdatedSong({ ...updatedSong, [field]: e.target.value });
  };

  const handleUpdateSong = async () => {
    try {
        const response = axios.put(`http://localhost:3001/api/songs/${song._id}`, updatedSong);
        dispatch(updateSong((await response).data));
        onClose();
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Update Song
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

          <StyledButton onClick={handleUpdateSong}>Update Song</StyledButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UpdateSongModal;
