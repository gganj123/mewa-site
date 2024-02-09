import React, { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = "test_2235af61a7d15c223bf690f6f63461100cafd10913fba65b268239a10cfa115824f4d350bb0e301c962c835d49dea320"
const characterName = "정답맨"
  // const urlString = "https://open.api.nexon.com/maplestory/v1/id"
  // const params = { character_name: characterName }
  // const requestUrl = new URLSearchParams(params).toString();

  // let ocid = ''

  // const apiHeader = {
  //   "x-nxopen-api-key": API_KEY
  // }




  // const answer = fetch(requestUrl, {
  //     headers:apiHeader
  // })
  //   .then(response => response.json())
  //   .then(data => getCharaterInfo(data['ocid']))
  //   .catch(error => console.error(error))
    

  //   function getCharaterInfo(id){
  //     const url = `https://open.api.nexon.com/maplestory/v1/character/basic?ocid=${id}&date=2024-02-09`;

  //     const answer2 = fetch(url, {
  //       headers : apiHeader
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(error => console.error(error))

  //   }

const App = () => {
  const [ocidData, setData] = useState(null);
  const [data2, setData2] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 요청할 엔드포인트 URL
        const url = 'https://open.api.nexon.com/maplestory/v1/id';

        // 추가할 헤더
        const headers = {
          'Content-Type': 'application/json',
          "x-nxopen-api-key": API_KEY,
        };

        // 추가할 파라미터
        const params = {
          character_name: characterName,
        };

        // axios를 사용하여 GET 요청 보내기
        const response = await axios.get(url, {
          headers: headers,
          params: params,
        });

        // 응답 받은 데이터 설정
        setData(response.data.ocid);

        if(ocidData)
        {
          const url2 = 'https://open.api.nexon.com/maplestory/v1/character/basic'
          const params2 = {
            ocid: ocidData,
            date: "2024-02-09"
          };

          const response2 = await axios.get(url2, {
            headers: headers,
            params: params2,
          });
          
          setData2(response2)
        }

      } catch (error) {
        // 에러 처리
        console.error('Error fetching data:', error.message);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, []); // useEffect의 두 번째 인자로 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행되도록 설정

  return (
    <div>
      {/* 받아온 데이터를 표시 */}
      {ocidData && (
        <div>
          {/* 데이터 표시 예시 */}
          <p>Data: {JSON.stringify(data2.data)}</p>
        </div>
      )}
    </div>
  );
};

export default App;



  






