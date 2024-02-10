import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_KEY;

const Ocidreq = () => {
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
            {/* ocidData를 사용하여 데이터를 렌더링합니다. */}
            {ocidData && (
                <div>
                    <p>Data: {JSON.stringify(ocidData.data)}</p>
                </div>
            )}
        </div>
    );
};

export default Ocidreq;
export const ocidData = ocidData;