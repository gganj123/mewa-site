import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useOcid from './useOcid';
import CurrentDate from './CurrentDate';

const API_KEY = process.env.REACT_APP_KEY;
const HyperURL = 'https://open.api.nexon.com//maplestory/v1/character/hyper-stat';

const Hyper = () => {
  const ocidData = useOcid();
  const [HyperData, setHyperData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(HyperURL, {
          headers: {
            'Content-Type': 'application/json',
            "x-nxopen-api-key": API_KEY,
          },
          params: {
            ocid: ocidData,
            date: "2024-02-10",
          },
        });
        setHyperData(response.data);
      } catch (error) {
        console.error('Error fetching stat data:', error.message);
      }
    };

    fetchData();
  }, [ocidData]);

  if(!HyperData){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Hyper Stat Info:</h2>
      <p>Date: {HyperData.date}</p>
      <p>Character Class: {HyperData.character_class}</p>
      <p>Use Preset Number: {HyperData.use_preset_no}</p>
      <p>Use Available Hyper Stat: {HyperData.use_available_hyper_stat}</p>
      <h3>Hyper Stat Preset 1:</h3>
      {HyperData.hyper_stat_preset_1.map((stat, index) => (
        <div key={index}>
          <p>Stat Type: {stat.stat_type}</p>
          <p>Stat Point: {stat.stat_point}</p>
          <p>Stat Level: {stat.stat_level}</p>
          <p>Stat Increase: {stat.stat_increase}</p>
        </div>
      ))}
      <p>Hyper Stat Preset 1 Remain Point: {HyperData.hyper_stat_preset_1_remain_point}</p>
      <h3>Hyper Stat Preset 2:</h3>
      {HyperData.hyper_stat_preset_2.map((stat, index) => (
        <div key={index}>
          <p>Stat Type: {stat.stat_type}</p>
          <p>Stat Point: {stat.stat_point}</p>
          <p>Stat Level: {stat.stat_level}</p>
          <p>Stat Increase: {stat.stat_increase}</p>
        </div>
      ))}
      <p>Hyper Stat Preset 2 Remain Point: {HyperData.hyper_stat_preset_2_remain_point}</p>
      <h3>Hyper Stat Preset 3:</h3>
      {HyperData.hyper_stat_preset_3.map((stat, index) => (
        <div key={index}>
          <p>Stat Type: {stat.stat_type}</p>
          <p>Stat Point: {stat.stat_point}</p>
          <p>Stat Level: {stat.stat_level}</p>
          <p>Stat Increase: {stat.stat_increase}</p>
        </div>
      ))}
    </div>
  );
};
export default Hyper;