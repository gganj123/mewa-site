import React, { useEffect, useState } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_KEY;

const CharacterInfo = ({ocidData}) => {
    const [characterData, setCharacterData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                if (!API_KEY || !ocidData) {
                    throw new Error("API_KEY 또는 ocidData가 없습니다.");
                }

                const characterInfoURL = 'https://open.api.nexon.com/maplestory/v1/character/basic';
                const params = {
                    ocid: ocidData.data,
                    date: "2024-02-09"
                };
                const headers = {
                    'Content-Type': 'application/json',
                    "x-nxopen-api-key": API_KEY,
                };

                const characterRes = await axios.get(characterInfoURL, {
                    headers: headers,
                    params: params,
                });

                setCharacterData(characterRes.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [ocidData]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {characterData && (
                <div>
                    <p>Data: {JSON.stringify(characterData)}</p>
                </div>
            )}
        </div>
    );
};

export default CharacterInfo;