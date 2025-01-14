import './App.css';
import React from 'react';
import Subscribe from './Components/Subscribe/Subscribe.js';
import PracticeAdvice from './Components/PracticeAdvice/PracticeAdvice.js';

function App() {
  return (
    <div className="App">
      <PracticeAdvice />
      <Subscribe />
      {/* <Footer /> */}
    </div>
  );
}

export default App;