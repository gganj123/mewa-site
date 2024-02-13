import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
const popularityURL = 'https://open.api.nexon.com/maplestory/v1/character/popularity';

const Popularity = () => {
  const ocidData = useSelector(state => state.ocidData);
  const [popularityData, setPopularityData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(popularityURL, {
          headers: {
            'Content-Type': 'application/json',
            'x-nxopen-api-key': API_KEY,
          },
          params: {
            ocid: ocidData,
            date: '2024-02-10',
          },
        });
        setPopularityData(response.data);
      } catch (error) {
        console.error('Error fetching popularity data:', error.message);
      }
    };

    fetchData();
  }, [ocidData]);

  if (!popularityData) {
    return <div>Loading...</div>;
  }

  return (
      <p className="Popular">
        인기도 : {popularityData.popularity}
        </p>
  );
};

export default Popularity;