import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setOcidData } from '../redux/action';

const API_KEY = process.env.REACT_APP_KEY;
const HyperURL = 'https://open.api.nexon.com/maplestory/v1/character/hyper-stat';

const Hyper = () => {
  const ocidData = useSelector(state => state.ocidData);
  const dispatch = useDispatch();
  const [hyperData, setHyperData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(HyperURL, {
          headers: {
            'Content-Type': 'application/json',
            'x-nxopen-api-key': API_KEY,
          },
          params: {
            ocid: ocidData,
            date: '2024-02-10',
          },
        });
        setHyperData(response.data);
      } catch (error) {
        console.error('Error fetching stat data:', error.message);
      }
    };

    fetchData();
  }, [ocidData]);

  if (!hyperData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Hyper Stat Info:</h2>
      <p>Date: {hyperData.date}</p>
      <p>Character Class: {hyperData.character_class}</p>
      <p>Use Preset Number: {hyperData.use_preset_no}</p>
      <p>Use Available Hyper Stat: {hyperData.use_available_hyper_stat}</p>
      <h3>Hyper Stat Preset 1:</h3>
      {hyperData.hyper_stat_preset_1.map((stat, index) => (
        <div key={index}>
          <p>Stat Type: {stat.stat_type}</p>
          <p>Stat Point: {stat.stat_point}</p>
          <p>Stat Level: {stat.stat_level}</p>
          <p>Stat Increase: {stat.stat_increase}</p>
        </div>
      ))}
      <p>Hyper Stat Preset 1 Remain Point: {hyperData.hyper_stat_preset_1_remain_point}</p>
      <h3>Hyper Stat Preset 2:</h3>
      {hyperData.hyper_stat_preset_2.map((stat, index) => (
        <div key={index}>
          <p>Stat Type: {stat.stat_type}</p>
          <p>Stat Point: {stat.stat_point}</p>
          <p>Stat Level: {stat.stat_level}</p>
          <p>Stat Increase: {stat.stat_increase}</p>
        </div>
      ))}
      <p>Hyper Stat Preset 2 Remain Point: {hyperData.hyper_stat_preset_2_remain_point}</p>
      <h3>Hyper Stat Preset 3:</h3>
      {hyperData.hyper_stat_preset_3.map((stat, index) => (
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