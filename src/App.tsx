import React from "react";
//Components
import { QuestionCard } from "./components/QuestionCard";

function App() {
  const startTrivia = async () => {
    //Handle Start
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    //Check user input
  };

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
}

export default App;
