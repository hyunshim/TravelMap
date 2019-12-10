import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import './App.scss';

import NavigationBar from './components/navigation/NavigationBar';

function App() {
  return (
    <div class="app">
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
