import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setOcidData } from '../redux/action';

const API_KEY = process.env.REACT_APP_KEY;
const characterInfoURL = 'https://open.api.nexon.com//maplestory/v1/character/basic';

const CharacterInfo = () => {
  const ocidData = useSelector(state => state.ocidData);
  const dispatch = useDispatch();
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
      <div className="inBox">
        {characterData && (
          <div>
            <article class="imgf">
              <img src={characterData.character_image} alt="Character" />
            </article>
            <article>
            <p>{characterData.character_name}<br></br>
          레벨: {characterData.character_level}<br></br>
          직업: {characterData.character_class}<br></br>
          경험치: {characterData.character_exp}({characterData.character_exp_rate}%)<br></br>
          성별: {characterData.character_gender}<br></br>
          월드: {characterData.world_name}<br></br>
          길드: {characterData.character_guild_name}</p>
            </article>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterInfo;