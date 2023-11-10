import express, { Request, Response } from 'express';
import Song from '../models/song';

const router = express.Router();

// Create a new song
router.post('/songs', async (req: Request, res: Response) => {
  try {
    const { title, artist, album, genre } = req.body;
    const newSong = new Song({ title, artist, album, genre });
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all songs
router.get('/songs', async (req: Request, res: Response) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get one song
router.get('/songs/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    res.json(song);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a song
router.put('/songs/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, artist, album, genre } = req.body;
    const updatedSong = await Song.findByIdAndUpdate(
      id,
      { title, artist, album, genre },
      { new: true }
    );
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a song
router.delete('/songs/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Song.findByIdAndDelete(id);
    res.json({ message: 'Song deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;