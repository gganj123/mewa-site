import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_KEY;
const dojangURL = 'https://open.api.nexon.com/maplestory/v1/character/dojang';

const Dojang = () => {
  const ocidData = useSelector(state => state.ocidData);
  const [dojangData, setDojangData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dojangURL, {
          headers: {
            'Content-Type': 'application/json',
            'x-nxopen-api-key': API_KEY,
          },
          params: {
            ocid: ocidData,
            date: '2024-02-10',
          },
        });
        setDojangData(response.data);
      } catch (error) {
        console.error('Error fetching dojang data:', error.message);
      }
    };

    fetchData();
  }, [ocidData]);

  if (!dojangData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dojang Info:</h2>
      <p>Date: {dojangData.date}</p>
      <p>Character Class: {dojangData.character_class}</p>
      <p>World Name: {dojangData.world_name}</p>
      <p>Dojang Best Floor: {dojangData.dojang_best_floor}</p>
      <p>Date Dojang Record: {dojangData.date_dojang_record}</p>
      <p>Dojang Best Time: {dojangData.dojang_best_time}</p>
    </div>
  );
};


export default Dojang;