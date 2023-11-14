import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import {CardContainer, Card} from './StyledComponents'

interface GenreStatisticsProps {
  apiUrl: string;
}

// const Container = styled.div`
//   display: flex;
//   overflow-x: auto;
//   padding: 16px;
// `;

// const Card = styled.div`
//   flex: 0 0 auto;
//   margin-right: 16px;
//   padding: 16px;
//   background-color: #f2f2f2;
//   border-radius: 8px;
// `;

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
  }, [apiUrl]);

  return (
    <CardContainer>
      {genreData.map((genre) => (
        <Card key={genre._id}>
          <h3>{genre._id}</h3>
          <p>Total Songs: {genre.count}</p>
        </Card>
      ))}
    </CardContainer>
  );
};

export default GenreStatistics;
