import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setOcidData } from '../redux/action';

const API_KEY = process.env.REACT_APP_KEY;
const statURL = 'https://open.api.nexon.com/maplestory/v1/character/stat';

const Stat = () => {
  const ocidData = useSelector(state => state.ocidData);
  const dispatch = useDispatch();
  const [statData, setStatData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(statURL, {
          headers: {
            'Content-Type': 'application/json',
            "x-nxopen-api-key": API_KEY,
          },
          params: {
            ocid: ocidData,
            date: "2024-02-10",
          },
        });
        setStatData(response.data);
      } catch (error) {
        console.error('Error fetching stat data:', error.message);
      }
    };

    fetchData();
  }, [ocidData]);

  if (!statData) {
    return <div>Loading...</div>;
  }
  return(
    statData.final_stat.find((name)=>name == '전투력'),
    <div className="Stat">
      
          {statData.final_stat.map((stat, index) => (
            <div key={index} className="item">
              <span>{stat.stat_name}</span><span> {stat.stat_value}</span>
            </div>
          ))}
      
    </div>);
  
          
};

export default Stat;