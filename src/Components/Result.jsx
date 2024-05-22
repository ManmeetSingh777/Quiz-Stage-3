import React from "react";
import { useNavigate } from 'react-router-dom';

const Result = ({ score, attempted, correct, wrong }) => {
  const navigate = useNavigate();

  const playAgain = () => {
    navigate('/');
  };

  return (
    <div className="ResultBg">
      <div className="ResultHeading">
        <h1 className="RH">Result</h1>
      </div>

      <div className="result-container">
        <div className="result-content">
          <div className="score-info">
            <h2>{correct > (attempted / 2) ? 'Great job!' : 'You need more practice!'}</h2>
            <h1 className="blue">Your score is {((correct / attempted) * 100).toFixed(2)}%</h1>
            <h2>Total number of questions: {attempted}</h2>
            <h2>Attempted questions: {attempted}</h2>
            <h2>Correct answers: {correct}</h2>
            <h2>Wrong answers: {wrong}</h2>
          </div>
        </div>
      </div>
      <div className="result-controls">
        <button className="play-again-button" onClick={playAgain}>Play Again</button>
        <button className="back-home-button" onClick={playAgain}>Back to Home</button>
      </div>
    </div>
  );
};

export default Result;
