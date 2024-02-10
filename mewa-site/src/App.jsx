import React from 'react';
import useOcid from './useOcid';
import Stat from './Stat';
import CharacterInfo from './CharacterInfo';
import Hyper from './Hyper';

const App = () => {
  return (
    <div>
      <useOcid />
      <CharacterInfo />
      <Stat />
      <Hyper/>
    </div>
  );
}

export default App;