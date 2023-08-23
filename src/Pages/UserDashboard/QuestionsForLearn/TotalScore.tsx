import React from "react";
import { Helmet } from "react-helmet-async";
import { FaCoins } from "react-icons/fa";

interface ResultItemType {
  totalScore: number;
  onRestart: () => void;
  handleQuizCompleted: () => void;
}

const TotalScore: React.FC<ResultItemType> = ({
  totalScore,
  onRestart,
  handleQuizCompleted,
}) => {
  const numberFormatter = new Intl.NumberFormat("bn-BD");

  // Format the total score using the number formatter
  const formattedTotalScore = numberFormatter.format(totalScore);
  return (
    <div>
      <Helmet>
        <title> Lang Master | Dashboard | TotalScore </title>
      </Helmet>
      <div className="w-80 h-80 flex flex-col justify-center items-center border-2 rounded-md shadow-md">
        <p className="py-4 text-2xl font-semibold text-center flex justify-center items-center gap-3">
          অর্জিত পয়েন্ট: {formattedTotalScore}{" "}
          <FaCoins className="text-yellow-500" />
        </p>
        {/* <button className="defaultBtn" onClick={onRestart}>
          Restart Quiz
        </button> */}
        <button className="defaultBtn" onClick={handleQuizCompleted}>
          পয়েন্ট সংগ্রহ করুন
        </button>
      </div>
    </div>
  );
};

export default TotalScore;
