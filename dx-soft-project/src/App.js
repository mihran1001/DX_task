import './App.css';
import React from 'react';
import Content from './Components/Content/Content.jsx';
import Subscribe from './Components/Subscribe/Subscribe.jsx';
import PracticeAdvice from './Components/PracticeAdvice/PracticeAdvice.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Content />
      <PracticeAdvice />
      <Subscribe />
      <Footer /> 
    </div>
  );
}

export default App;