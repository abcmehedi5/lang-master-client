import React from "react";
import { Helmet } from "react-helmet-async";

interface QuizProps {
  option: string;
  index: number;
  handleAnswerClick: (answerIndex: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ option, index, handleAnswerClick }) => {
  return (
    <>
      <Helmet>
        <title> Quiz | Lang Master </title>
      </Helmet>
      <div
        className="w-full overflow-hidden group"
        style={{ borderRadius: "20px 0 0 0" }}
      >
        <div className="bg-gradient-to-r from-[#00ffca] via-teal-500 to-[#047e65] group-hover:from-[#047e65] group-hover:via-teal-500 group-hover:to-[#00ffca] hover:cursor-pointer transition duration-300">
          <label className="font-semibold px-4 py-4 text-white text-xl flex gap-2 cursor-pointer">
            <input
              type="radio"
              name={`question_${index}`}
              value={option}
              onClick={() => handleAnswerClick(index)}
            />
            {option}
          </label>
        </div>
      </div>
    </>
  );
};

export default Quiz;
