import { useContext, useState } from "react";
import Quiz from "./Quiz";
import useQuize from "../../../hooks/useQuize/useQuize";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

interface QuizData {
  _id: string;
  questionData: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

const Quizzes = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [pointCollectionProcessing, setPointCollectionProcessing] =
    useState(false);

  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const { id } = useParams<{ id: string }>();

  const { allQuizeData } = useQuize();

  const quizData = allQuizeData.filter(
    (quizdataa: QuizData) => quizdataa._id == id
  )[0]?.questionData;

  if (!quizData || quizData.length == 0) {
    return <div>No quiz data available.</div>;
  }

  const handleAnswerClick = (selectedAnswer: string) => {
    if (selectedAnswer == quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData?.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  // quiz complete handler and point store in db
  const handleQuizCompleted = async () => {
    try {
      if (user) {
        setPointCollectionProcessing(true);
        const response = await axiosSecure.patch(
          `/users/user/${user?.email}`,
          {
            score: 2,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setPointCollectionProcessing(false);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "আপনি ২ পয়েন্ট পেয়েছেন",
            icon: "success",
          }).then(() => {
            // Navigate to the homepage
            navigate("/user-dashboard/quiz");
          });
        }
      } else {
        console.error("failed to update quiz points");
        setPointCollectionProcessing(false);
      }
    } catch (error) {
      console.error("Error while storing quiz results", error);
      setPointCollectionProcessing(false);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  const totalQuestions = quizData?.length;
  const scorePercentage = (score / totalQuestions) * 100;

  let comment = "";
  let commentClass = "";

  if (scorePercentage < 40) {
    comment = "Not Good Enough , Keep practicing!";
    commentClass = "text-red-500";
  } else if (scorePercentage >= 40 && scorePercentage <= 70) {
    comment = "Good, keep practicing!";
    commentClass = "text-yellow-500";
  } else {
    comment = "Great performance!";
    commentClass = "text-green-500";
  }

  return (
    <div>
      <div
        className="bg-[#a2dce5] rounded-lg md:w-9/12  mx-auto my-20 text-center"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        }}
      >
        <div>
          {showResult ? (
            <div className="px-4 py-10">
              <h3 className="text-3xl font-bold mb-4">Quiz Finished!</h3>
              <p
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                }}
                className="text-2xl px-6 py-4 capitalize font-semibold mb-5 w-1/2 mx-auto text-white border-none cursor-pointer bg-[#088395] rounded-md"
              >
                Your score: {scorePercentage.toFixed(2)}%
              </p>
              <p className={`my-5 ${commentClass} text-3xl font-semibold`}>
                {comment}
              </p>

              {scorePercentage < 70 ? (
                <p className="mb-4 text-red-400">
                  You are not able to get coin
                </p>
              ) : (
                <button
                  className="defaultBtn mb-4"
                  onClick={handleQuizCompleted}
                  disabled={pointCollectionProcessing}
                >
                  {pointCollectionProcessing ? (
                    <ImSpinner9 className="mx-auto animate-spin"></ImSpinner9>
                  ) : (
                    "Collect Points"
                  )}
                </button>
              )}

              <div className="flex justify-center gap-3">
                <div>
                  <button
                    className="btn"
                    onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}
                  >
                    See Correct Answers
                  </button>
                  {showCorrectAnswers && (
                    <div className="mt-5 text-left">
                      <h3 className="text-xl font-semibold mb-2">
                        Correct Answers:
                      </h3>
                      {quizData.map((question: any, index: number) => (
                        <div key={index}>
                          <p>
                            {index + 1}. {question?.question}
                          </p>
                          <p className="mb-2 text-red-500">
                            Answer: {question?.correctAnswer}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button className="btn" onClick={restartQuiz}>
                  Restart Quiz
                </button>
              </div>
            </div>
          ) : (
            <div>
              <Quiz
                question={quizData[currentQuestion].question}
                options={quizData[currentQuestion].options}
                onAnswerClick={handleAnswerClick}
              />
            </div>
          )}
          <div className="text-center my-7 text-xl font-semibold">
            {showResult ? (
              ""
            ) : (
              <div className="text-white pb-14">
                Your Score: {scorePercentage.toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
