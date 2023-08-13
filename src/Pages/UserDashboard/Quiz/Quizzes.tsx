import React, { useState } from "react";
import Quiz from "./Quiz";
import quizWaveImg from "./../../../assets/quizwave.svg";

interface QuizDataItem {
  question: string;
  options: string[];
  correctAnswer: string;
}

const Quizzes: React.FC = () => {
  const quizData: QuizDataItem[] = [
    {
      question: "Question 1: What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: 'Question 2: Which planet is known as the "Red Planet"?',
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div
      className="md:w-9/12 mx-auto my-20 py-36 px-4 md:px-24 shadow-2xl md:flex flex-col justify-center rounded-lg"
      style={{
        backgroundImage: `url(${quizWaveImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h3 className="text-3xl font-bold text-center mb-10 text-gray-100">
          {quizData[currentQuestionIndex].question}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quizData[currentQuestionIndex].options.map((option, index) => (
            <Quiz key={index} option={option} index={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          className="w-40 bg-purple-500 text-white py-2 rounded text-xl font-semibold"
          onClick={handlePreviousClick}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="w-40 bg-blue-500 text-white py-2 px-4 rounded text-xl font-semibold"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quizzes;
