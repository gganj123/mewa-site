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
    <p className='Dojang'>
    
      무릉도장 :   {dojangData.dojang_best_floor}
      {/* <p>최고기록시간: {dojangData.dojang_best_time}초</p> */}
        {/* <p>직업: {dojangData.character_class}</p>
      <p>월드: {dojangData.world_name}</p> */}
    </p>
  );
};


export default Dojang;