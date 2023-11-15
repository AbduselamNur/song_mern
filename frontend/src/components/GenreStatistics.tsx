import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CardContainer, Card, StyledParagraph} from './StyledComponents'

interface GenreStatisticsProps {
  apiUrl: string;
}

const GenreStatistics: React.FC<GenreStatisticsProps> = ({ apiUrl }) => {
  const [genreData, setGenreData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGenreData(response.data.genreCounts);
      } catch (error) {
        console.error('Error fetching genre statistics:', error);
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
      {genreData.map((genre) => (
        <Card key={genre._id}>
          <h2>{genre._id}</h2>
          <StyledParagraph>Total Songs: {genre.count}</StyledParagraph>
        </Card>
      ))}
    </CardContainer>
  );
};

export default GenreStatistics;