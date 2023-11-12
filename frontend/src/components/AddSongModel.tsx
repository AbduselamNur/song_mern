// src/components/AddSongModal.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong } from '../redux/songsSlice';
import { Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, StyledButton } from './StyledComponents';
import axios from 'axios';


interface AddSongModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddSongModal: React.FC<AddSongModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState({ title: '', artist: '', album: '', genre: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof typeof newSong) => {
    setNewSong({ ...newSong, [field]: e.target.value });
  };

  const handleAddSong = async () => {
    // dispatch(addSong(newSong));
    // onClose();
    try {
        const response = await axios.post('http://localhost:3001/api/songs', newSong);
        dispatch(addSong(response.data));
        onClose();
    } catch (error) {
        console.error(error);
    }
  };

  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Add New Song</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody>
          <label>Title:</label>
          <Input type="text" value={newSong.title} onChange={(e) => handleInputChange(e, 'title')} />

          <label>Artist:</label>
          <Input type="text" value={newSong.artist} onChange={(e) => handleInputChange(e, 'artist')} />

          <label>Album:</label>
          <Input type="text" value={newSong.album} onChange={(e) => handleInputChange(e, 'album')} />

          <label>Genre:</label>
          <Input type="text" value={newSong.genre} onChange={(e) => handleInputChange(e, 'genre')} />

          <StyledButton onClick={handleAddSong}>Add Song</StyledButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddSongModal;