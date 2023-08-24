import React from "react";

interface QuestionProps {
  question: string;
  options: string[];
  onAnswerClick: (selectedAnswer: string) => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
}

const Quiz: React.FC<QuestionProps> = ({
  question,
  options,
  onAnswerClick,
}) => {
  return (
    <div>
      {/* <h2 className="text-2xl mb-3">{question}</h2> */}
      <h2 className="text-3xl font-semibold py-3 px-2 text-center uppercase rounded-t-lg bg-[#222] text-white mb-5 w-full">
        {question}
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 px-10 py-8 gap-6">
        {options.map((option, index) => (
          <button
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            className="bg-base-100 text-2xl px-1 py-4 capitalize font-semibold w-full  hover:text-white border-none cursor-pointer hover:bg-[#088395] rounded-md"
            key={index}
            onClick={() => onAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
