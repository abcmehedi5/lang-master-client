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
      question: "Question 1: Which city serves as the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: 'Question 2: Which planet is known as the "Red Planet"?',
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Question 3: What's the largest mammal in the oceans?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question:
        "Question 4: Which scientist developed the theory of relativity?",
      options: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Niels Bohr",
      ],
      correctAnswer: "Albert Einstein",
    },
    {
      question:
        "Question 5: Which gas do plants primarily use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      question:
        "Question 6: What famous painting is known for its mysterious smile?",
      options: [
        "Starry Night",
        "The Persistence of Memory",
        "The Scream",
        "Mona Lisa",
      ],
      correctAnswer: "Mona Lisa",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (quizFinished) {
      return; // Prevent scoring after the quiz is finished
    }

    const selectedAnswer = quizData[currentQuestionIndex].options[answerIndex];
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 10);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizFinished(true);
    }
  };

  const scorePercentage = (score / (quizData.length * 10)) * 100;
  const isLastQuestion = currentQuestionIndex === quizData.length - 1;

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
            <Quiz
              key={index}
              option={option}
              index={index}
              handleAnswerClick={handleAnswerClick}
              // disabled={quizFinished}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button
          className="w-40 bg-purple-500 text-white py-2 rounded text-xl font-semibold"
          onClick={() =>
            setCurrentQuestionIndex(Math.max(currentQuestionIndex - 1, 0))
          }
          disabled={currentQuestionIndex === 0 || quizFinished}
        >
          Previous
        </button>
        {isLastQuestion ? (
          <div className="w-40 text-white my-4 text-xl font-semibold">
            Finished
          </div>
        ) : (
          <button
            className="w-40 bg-blue-500 text-white py-2 px-4 rounded text-xl font-semibold"
            onClick={() =>
              setCurrentQuestionIndex(
                Math.min(currentQuestionIndex + 1, quizData.length - 1)
              )
            }
            disabled={quizFinished}
          >
            Next
          </button>
        )}
      </div>

      <div className="text-center mt-8 text-xl font-semibold">
        {quizFinished ? (
          <div className="text-white">
            Your Score: {scorePercentage.toFixed(2)}%
            <br />
            Total Score: {score} out of {quizData.length * 10}
          </div>
        ) : (
          <div className="text-white">
            Your Score: {scorePercentage.toFixed(2)}%
          </div>
        )}
      </div>
    </div>
  );
};

export default Quizzes;
