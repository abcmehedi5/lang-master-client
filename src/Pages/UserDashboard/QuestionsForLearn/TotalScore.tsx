import React from "react";
import { Helmet } from "react-helmet-async";

interface ResultItemType {
  totalScore: number;
  onRestart: () => void;
}

const TotalScore: React.FC<ResultItemType> = ({ totalScore, onRestart }) => {
  return (
    <div>
       <Helmet>
      <title> Lang Master | Dashboard | TotalScore </title>
    </Helmet>
      <p>Your score: {totalScore}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default TotalScore;
