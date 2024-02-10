import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useOcid from './useOcid';
import CurrentDate from './CurrentDate';

const API_KEY = process.env.REACT_APP_KEY;
const characterInfoURL = 'https://open.api.nexon.com//maplestory/v1/character/basic';

const CharacterInfo = () => {
  const ocidData = useOcid();
  const [characterData, setCharacterData] = useState(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(characterInfoURL, {
          headers: {
            'Content-Type': 'application/json',
            "x-nxopen-api-key": API_KEY,
          },
          params: {
            ocid: ocidData,
            date: "2024-02-10",
          },
        });
        setCharacterData(response.data);
      } catch (error) {
        console.error('Error fetching character data:', error.message);
      }
    };
   

    fetchData();
  }, [ocidData]);

  return (
    <div>
      <h2>Character Data:</h2>
      <pre>{JSON.stringify(characterData, null, 2)}</pre>
    </div>
  );
};

export default CharacterInfo;