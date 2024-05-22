import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <h1 className="quiz-heading">Quiz App</h1>
      <button className="play-button" onClick={startQuiz}>Play</button>
    </div>
  );
};

export default Home;
