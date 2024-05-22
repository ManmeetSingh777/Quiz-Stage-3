import React, { Component } from "react";
import Data from "../resources/quizQuestion.json";
import { useNavigate } from 'react-router-dom';

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      score: 0,
      attempted: 0,
      correct: 0,
      wrong: 0,
    };
    this.navigate = this.props.navigate;
  }

  clickPrev = () => {
    let ques = this.state.count === 0 ? Data.length - 1 : this.state.count - 1;
    this.setState({
      count: ques,
    });
  };

  clickNext = () => {
    let ques = this.state.count === Data.length - 1 ? 0 : this.state.count + 1;
    this.setState({
      count: ques,
    });
  };

  selectOption = (selectedOption) => {
    const { count } = this.state;
    const correctAnswer = Data[count].answer;
    const isCorrect = selectedOption === correctAnswer;
    this.setState((prevState) => ({
      score: isCorrect ? prevState.score + 1 : prevState.score,
      attempted: prevState.attempted + 1,
      correct: isCorrect ? prevState.correct + 1 : prevState.correct,
      wrong: isCorrect ? prevState.wrong : prevState.wrong + 1,
      count: prevState.count === Data.length - 1 ? 0 : prevState.count + 1,
    }), () => {
      if (this.state.attempted === Data.length) {
        this.endQuiz();
      }
    });
  };

  clickQuit = () => {
    if (window.confirm("Are you sure that you want to quit ?")) {
      this.endQuiz();
    }
  };

  endQuiz = () => {
    this.props.setScore(this.state.score);
    this.props.setAttempted(this.state.attempted);
    this.props.setCorrect(this.state.correct);
    this.props.setWrong(this.state.wrong);
    this.navigate('/result');
  };

  render() {
    return (
      <div className="main">
        <div className="Box">
          <h1>Question</h1>
          <div className="no">
            {this.state.count + 1} of {Data.length}
          </div>
          <div className="ques">{Data[this.state.count].question}</div>

          <div className="options-container">
            <div className="side1">
              <div className="option" onClick={() => this.selectOption(Data[this.state.count].optionA)}>
                {Data[this.state.count].optionA}
              </div>
              <div className="option" onClick={() => this.selectOption(Data[this.state.count].optionB)}>
                {Data[this.state.count].optionB}
              </div>
            </div>
            <div className="side2">
              <div className="option" onClick={() => this.selectOption(Data[this.state.count].optionC)}>
                {Data[this.state.count].optionC}
              </div>
              <div className="option" onClick={() => this.selectOption(Data[this.state.count].optionD)}>
                {Data[this.state.count].optionD}
              </div>
            </div>
          </div>

          <div className="quiz-controls">
            <button className="prev-button" onClick={this.clickPrev}>
              Previous
            </button>
            <button className="next-button" onClick={this.clickNext}>
              Next
            </button>
            <button className="quit-button" onClick={this.clickQuit}>
              Quit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function withNavigate(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
}

export default withNavigate(QuizComponent);
