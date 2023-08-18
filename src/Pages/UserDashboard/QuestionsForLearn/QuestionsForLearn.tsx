import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import TotalScore from "./TotalScore";

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Lesson {
  lessonNumber: string;
  lessonTitle: string;
  quiz: Question[];
}

interface LessonsComponentType {
  selectedLesson: Lesson;
}

// ! Main code start

const QuestionsForLearn: React.FC<LessonsComponentType> = () => {
  // ! state Data fetching by params
  const { id, lessonNumber } = useParams<{
    id: string;
    lessonNumber: string;
  }>();
  const { allLearnData, loading } = useLearnData();

  // ! states for quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // Added type annotation
  const [showScore, setShowScore] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>(0);

  const [clickedOptions, setClickedOptions] = useState<{
    [key: number]: number;
  }>({});

  // ! code for selecting specific lesson
  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedUnit = allLearnData.find((unit) => unit._id === id);
  if (!selectedUnit) {
    return <p>Unit not found.</p>;
  }

  const selectedLesson: Lesson | undefined = selectedUnit.lessons.find(
    (lesson) => lesson.lessonNumber === lessonNumber
  );

  if (!selectedLesson) {
    return <p>Lesson not found.</p>;
  }
  const questions = selectedLesson.quiz;

  // ! end

  // ! code for quiz start
  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
    setIsCorrectAnswer(null); // Reset isCorrectAnswer state
    setCorrectAnswerIndex(0); // Reset correctAnswerIndex state
    setClickedOptions({}); // Reset clickedOptions state
  };

  const handleButtonClick = (option: string, index: number) => {
    setSelectedOption(option);
    updateScore(option);

    setIsCorrectAnswer(option === questions[currentQuestion].correctAnswer);
    setCorrectAnswerIndex(
      questions[currentQuestion].options.indexOf(
        questions[currentQuestion].correctAnswer
      )
    );
    // Set the clicked option for the current question
    setClickedOptions((prevClickedOptions) => ({
      ...prevClickedOptions,
      [currentQuestion]: index,
    }));
  };

  const handleNext = () => {
    setSelectedOption(null); // Clear the selected option for the next question

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
    setIsCorrectAnswer(true);
  };
  const updateScore = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  // ! end

  return (
    <div className="flex justify-center items-center h-screen">
      {/* // TODO: Have to work with progress for questions number  */}
      {/* <div className="bg-gray-200 h-4 relative">
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}

      {/* ! questions sections  */}

      <div className="max-w-2xl mx-auto px-4 py-8 ">
        {showScore ? (
          <TotalScore totalScore={score} onRestart={handleRestart}></TotalScore>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-2xl font-bold">
                {questions[currentQuestion].question}
              </span>
            </div>
            <ul className="mb-6">
              {/* options section  */}
              {questions[currentQuestion].options.map((option, index) => (
                <div className="w-full">
                  <button
                    key={index}
                    className={`border border-b-2 shadow-md rounded-xl px-4 py-4 block w-full mb-3 hover:bg-base-200 transition duration-200 tran ${
                      selectedOption === option
                        ? option === questions[currentQuestion].correctAnswer
                          ? "bg-green-200 border-green-400 shadow-lg"
                          : "bg-red-400 border-red-200"
                        : "hover:bg-red-200"
                    }`}
                    onClick={() => handleButtonClick(option, index)}
                    disabled={
                      clickedOptions[currentQuestion] !== undefined &&
                      clickedOptions[currentQuestion] !== index
                    }
                  >
                    {option}
                  </button>
                </div>
              ))}
            </ul>

            {/* showing correct ans here if answer is wrong  */}
            <div>
              {isCorrectAnswer === false && (
                <p className="text-red-500 mt-2 font-semibold text-center py-4">
                  সঠিক উত্তর:{" "}
                  {questions[currentQuestion].options[correctAnswerIndex]}
                </p>
              )}
            </div>

            {/* next question  button */}
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className={`defaultBtn mt-3 px-2 py-2 ${
                  selectedOption === null ? "hidden" : ""
                }`}
              >
                চালিয়ে যান
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionsForLearn;
