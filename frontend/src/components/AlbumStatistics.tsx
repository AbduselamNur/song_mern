import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CardContainer, Card} from './StyledComponents'

interface AlbumStatisticsProps {
  apiUrl: string;
}

const AlbumStatistics: React.FC<AlbumStatisticsProps> = ({ apiUrl }) => {
  const [albumData, setAlbumData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbumData(response.data.songStats);
      } catch (error) {
        console.error('Error fetching album statistics:', error);
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
      {albumData.map((album) => (
        <Card key={album._id}>
          <h2>{album._id}</h2>
          <p>Total Songs: {album.totalSongs}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default AlbumStatistics;