import React from 'react';
import './App.scss';

import NavigationBar from './components/navigation/NavigationBar';
import BaseMap from './components/base_map/BaseMap';

function App() {
  return (
    <div className="app">
      <NavigationBar></NavigationBar>
      <BaseMap></BaseMap>
    </div>
  );
}

export default App;
