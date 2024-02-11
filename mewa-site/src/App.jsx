import React from 'react';
import UseOcid from './api-info/UseOcid';
import Stat from './api-info/Stat';
import CharacterInfo from './api-info/CharacterInfo';
import Hyper from './api-info/Hyper';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UseOcid />
      </div>
    </Provider>
  );
}

export default App;