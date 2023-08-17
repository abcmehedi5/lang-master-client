import React from "react";

interface ResultItemType {
  totalScore: number;
  onRestart: () => void;
}

const TotalScore: React.FC<ResultItemType> = ({ totalScore, onRestart }) => {
  return (
    <div>
      <p>Your score: {totalScore}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default TotalScore;
