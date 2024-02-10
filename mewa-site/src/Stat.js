import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ocidData } from './Ocidreq';


const API_KEY = process.env.REACT_APP_KEY;

const Stat= (ocidData)=>{
    const [statData, setStatData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() =>{
            try{
                if (!API_KEY || !ocidData) {
                    throw new Error("API_KEY 또는 ocidData가 없습니다.");
                }

                const statURL = 'https://open.api.nexon.com/maplestory/v1/character/stat';

                const headers = {
                    'Content-Type': 'application/json',
                    "x-nxopen-api-key": API_KEY,
                }

                const params = {
                    ocid: ocidData.data,
                    date: "2024-02-09"
                };

                const statRes = await axios.get(statURL, {
                    headers: headers,
                    params: params,
                });

                setStatData(statRes.data);
            }catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[ocidData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {statData && (
                <div>
                    <p>Data: {JSON.stringify(statData)}</p>
                </div>
            )}
        </div>
    );
}

export default Stat;