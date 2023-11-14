import express, { Request, Response } from 'express';
import Song from '../models/song';

const router = express.Router();

router.get('/statistics', async (req: Request, res: Response) => {
  try {
    const totalSongs = await Song.countDocuments();
    const totalArtists = await Song.aggregate([
      { $group: { _id: '$artist' } },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]).exec().then(data => data[0].count);
    const totalAlbums = await Song.aggregate([
      { $group: { _id: '$album' } },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]).exec().then(data => data[0].count);
    const totalGenres = await Song.aggregate([
      { $group: { _id: '$genre' } },
      { $group: { _id: null, count: { $sum: 1 } } },
    ]).exec().then(data => data[0].count);

    const genreCounts = await Song.aggregate([
      { $group: { _id: '$genre', count: { $sum: 1 } } },
    ]);

    const artistAlbumCounts = await Song.aggregate([
      { $group: { _id: '$artist', totalAlbums: { $sum: 1 }, totalSongs: { $sum: 1 } } },
    ]);

    const songStats = await Song.aggregate([
      { $group: { _id: '$album', totalSongs: { $sum: 1 } } },
    ]);

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
      genreCounts,
      artistAlbumCounts,
      songStats,
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;