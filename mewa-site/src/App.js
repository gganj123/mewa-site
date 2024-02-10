import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterInfo from './CharacterInfo';
import Stat from './Stat';

const API_KEY = process.env.REACT_APP_KEY;
const App = () => {
  const [ocidData, setOcidData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const ocidURL = 'https://open.api.nexon.com/maplestory/v1/id';

              const headers = {
                  'Content-Type': 'application/json',
                  "x-nxopen-api-key": API_KEY,
              };

              const characterName = '정답맨';

              const params = {
                  character_name: characterName,
              };

              const response = await axios.get(ocidURL, {
                  headers: headers,
                  params: params,
              });

              setOcidData(response.data.ocid);

          } catch(error){
              console.error('Error fetching data:', error.message);
          }
      };

      fetchData();
  },[]);
  return (
    <div>
      <CharacterInfo ocidData={ocidData} />
      <Stat ocidData={ocidData}/>
    </div>
  );
}

export default App;