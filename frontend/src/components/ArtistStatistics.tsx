// src/components/ArtistStatistics.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CardContainer, Card} from './StyledComponents'

interface ArtistStatisticsProps {
  apiUrl: string;
}

const ArtistStatistics: React.FC<ArtistStatisticsProps> = ({ apiUrl }) => {
  const [artistData, setArtistData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setArtistData(response.data.artistAlbumCounts);
      } catch (error) {
        console.error('Error fetching artist statistics:', error);
      }
    };
    
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => {
        clearInterval(intervalId)
    }
  }, [apiUrl]);

  return (
    <CardContainer>
      {artistData.map((artist) => (
        <Card key={artist._id}>
          <h3>{artist._id}</h3>
          <p>Total Albums: {artist.totalAlbums}</p>
          <p>Total Songs: {artist.totalSongs}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default ArtistStatistics;