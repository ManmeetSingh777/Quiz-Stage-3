import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

function App() {
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={
          <Quiz 
            setScore={setScore} 
            setAttempted={setAttempted} 
            setCorrect={setCorrect} 
            setWrong={setWrong}
          />
        } />
        <Route path="/result" element={
          <Result 
            score={score} 
            attempted={attempted} 
            correct={correct} 
            wrong={wrong}
          />
        } />
      </Routes>
    </Router>
  );
}

export default App;
