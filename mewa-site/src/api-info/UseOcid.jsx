import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setOcidData } from '../redux/action';
import CharacterInfo from './CharacterInfo';
import Stat from './Stat';
import Hyper from './Hyper';
import Popularity from './popularity';
import Dojang from './Dojang';

const UseOcid = () => {
  const ocidData = useSelector(state => state.ocidData);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = process.env.REACT_APP_KEY;
        const ocidURL = 'https://open.api.nexon.com/maplestory/v1/id';
        const headers = {
          'Content-Type': 'application/json',
          'x-nxopen-api-key': API_KEY,
        };
        const params = {
          character_name: '후니',
        };

        const response = await axios.get(ocidURL, {
          headers: headers,
          params: params,
        });

        dispatch(setOcidData(response.data.ocid));
      } catch (error) {
        console.error('Error fetching ocid data:', error.message);
      }
    };

    // Redux 스토어에서 ocidData가 없을 때만 데이터를 가져오도록 함
    if (!ocidData) {
      fetchData();
    }
  }, [ocidData, dispatch]);

  // ocidData가 존재할 때만 하위 컴포넌트를 렌더링
  if (ocidData) {
    
    console.log(ocidData)
    return (
      <>
        <CharacterInfo ocid={ocidData} />
        <Popularity ocid={ocidData}/>
        <Dojang ocid={ocidData}/>
        <Stat ocid={ocidData} />
        <Hyper ocid={ocidData} />
      </>
    );
  }

  return null;
};

export default UseOcid;