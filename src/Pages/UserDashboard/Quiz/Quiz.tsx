import React from "react";

interface QuizProps {
  option: string;
  index: number;
  handleAnswerClick: (index: number) => void;
  selected: boolean;
  correct: boolean;
  disabled: boolean;
}

const Quiz: React.FC<QuizProps> = ({
  option,
  index,
  handleAnswerClick,
  selected,
  correct,
  disabled,
}) => {
  let buttonClass = "border py-2 px-4 rounded-lg text-lg font-semibold";

  if (selected) {
    buttonClass += correct ? " bg-green-500 text-white" : " bg-red-500 text-white";
  } else {
    buttonClass += " bg-gray-100 text-gray-800";
  }

  return (
    <button
      className={buttonClass}
      onClick={() => handleAnswerClick(index)}
      disabled={disabled}
    >
      {option}
    </button>
  );
};

export default Quiz;
