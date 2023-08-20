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
      <div className="w-80 h-80 flex flex-col justify-center items-center border-2 rounded-md shadow-md">
        <p className="py-4 text-2xl font-semibold text-center">
          Your score: {totalScore}
        </p>
        <button className="defaultBtn" onClick={onRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default TotalScore;
