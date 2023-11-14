// src/components/StatisticsCard.tsx
import React, { Dispatch, useEffect, useState } from 'react';
import axios from 'axios';
import { CardContainer, Card, StyledParagraph } from './StyledComponents';
import { dispatch } from '../redux/store';


interface StatisticsCardProps {
  apiUrl: string;
  title: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ apiUrl, title }) => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => {
        clearInterval(intervalId)
    }
  }, [apiUrl, dispatch]);

  return (
    <CardContainer>
      <Card>
        <h2>{title}</h2>
        {data ? (
          <div>
            <StyledParagraph>Total Songs: {data.totalSongs}</StyledParagraph>
            <StyledParagraph>Total Artists: {data.totalArtists}</StyledParagraph>
            <StyledParagraph>Total Albums: {data.totalAlbums}</StyledParagraph>
            <StyledParagraph>Total Genres: {data.totalGenres}</StyledParagraph>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
    </CardContainer>
  );
};

export default StatisticsCard;