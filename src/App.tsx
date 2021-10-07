import React from 'react';
import LeaderBoardGrid from './components/LeaderBoardGrid';
import HotTakes from './components/HotTakes';
import './App.css';

function App() {
  return (
    <div className="App">
      <HotTakes />
    <LeaderBoardGrid />
    </div>
  );
}

export default App;
