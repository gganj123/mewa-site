import { useEffect, useState } from 'react';
import axios from 'axios';

const useOcid = () => {
  const [useocidData, setuseOcidData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = process.env.REACT_APP_KEY;
        const ocidURL = 'https://open.api.nexon.com/maplestory/v1/id';
        const headers = {
          'Content-Type': 'application/json',
          "x-nxopen-api-key": API_KEY,
        };
        const params = {
          character_name: "정답맨",
        };

        const response = await axios.get(ocidURL, {
          headers: headers,
          params: params,
        });

        setuseOcidData(response.data.ocid);
      } catch (error) {
        console.error('Error fetching ocid data:', error.message);
      }
    };

    fetchData();
  }, []);

  return useocidData;
};

export default useOcid;