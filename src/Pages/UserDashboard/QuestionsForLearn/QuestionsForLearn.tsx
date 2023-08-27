import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import TotalScore from "./TotalScore";
import { AiOutlineClose } from "react-icons/ai";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

const QuestionsForLearn = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { id, lessonNumber } = useParams<{
    id: string;
    lessonNumber: string;
  }>();
  const [allLearnData] = useLearnData();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number>(0);
  const [clickedOptions, setClickedOptions] = useState<{
    [key: number]: number;
  }>({});

  // show the last part compelte
  // const [showUnitComplete, setShowUnitComplete] = useState(false);

  const [quizCompleted, setQuizCompleted] = useState(false);

  const navigate = useNavigate();

  // -------------- sweet alert ----------------

  const [showAdditionalSection, setShowAdditionalSection] = useState(false);

  // alert when want to refresh the page
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue =
        "You have unsaved progress. Are you sure you want to leave?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // quiz complete button handler and update user points
  const handleQuizCompleted = async () => {
    console.log("quiz", quizCompleted);
    if (quizCompleted) {
      try {
        if (user) {
          const response = await axiosSecure.patch(
            `http://localhost:5000/users/user/${user.email}`,
            {
              score: score,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 200) {
            Swal.fire({
              // title: "Good job!",
              text: "আপনার পয়েন্ট সংগ্রহ হয়েছে",
              icon: "success",
            }).then(() => {
              // Navigate to the homepage
              navigate("/user-dashboard/learning");
            });
          } else {
            console.error("Failed to update quiz score");
          }
        } else {
          console.error("User not authenticated");
        }
      } catch (error) {
        console.error("Error while storing quiz results", error);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
    setIsCorrectAnswer(null);
    setCorrectAnswerIndex(0);
    setClickedOptions({});
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
    setClickedOptions((prevClickedOptions) => ({
      ...prevClickedOptions,
      [currentQuestion]: index,
    }));
  };

  const handleNext = async () => {
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(questions.length); // Set currentQuestion to questions.length
      setShowScore(true);
      setQuizCompleted(true);
    }
    setIsCorrectAnswer(true);
  };

  const updateScore = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const selectedUnit = allLearnData.find((unit: any) => unit._id === id);
  if (!selectedUnit) {
    return <p>Unit not found.</p>;
  }

  const selectedLesson: Lesson | undefined = selectedUnit.lessons.find(
    (lesson: any) => lesson.lessonNumber === lessonNumber
  );

  if (!selectedLesson) {
    return <p>Lesson not found.</p>;
  }
  const questions = selectedLesson.quiz;

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="w-full md:px-0 px-3 flex items-center justify-center gap-3 text-2xl">
        <button
          onClick={() => {
            setShowAdditionalSection(true);
          }}
        >
          <AiOutlineClose />
        </button>
        <progress
          className="progress md:w-1/2 progress-accent h-3"
          value={(currentQuestion / questions.length) * 100}
          max="100"
        ></progress>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-8 ">
        {showScore ? (
          <TotalScore
            totalScore={score}
            onRestart={handleRestart}
            handleQuizCompleted={handleQuizCompleted}
          ></TotalScore>
        ) : (
          <div>
            <div className="mb-8">
              <span className="text-2xl font-bold">
                {questions[currentQuestion].question}
              </span>
            </div>
            <ul className="mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <div className="w-full" key={index}>
                  <button
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
            <div>
              {isCorrectAnswer === false && (
                <p className="text-red-500 mt-2 font-semibold text-center py-4">
                  Correct Answer:{" "}
                  {questions[currentQuestion].options[correctAnswerIndex]}
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleNext}
                className={`defaultBtn mt-3 px-2 py-2 ${
                  selectedOption === null ? "hidden" : ""
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ----------------------- sweat alert ------------- */}
      {showAdditionalSection && (
        <div className="w-full px-3 bg-base-200 absolute bottom-0 py-7">
          <div className="md:flex items-center justify-between space-y-3">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                আপনি কি সত্যিই প্র্যাকটিস ছেড়ে চলে যেতে চাচ্ছেন?
              </h1>
              <p className="text-xl">
                এই সেশনে যতটুকু অগ্রগতি হয়েছে, তার পুরোটাই হারিয়ে যাবে।
              </p>
            </div>

            <div className="gap-4 flex ">
              <Link to="/user-dashboard/learning">
                <button className="btn btn-accent">
                  <span className="text-white"> বের হয়ে যান</span>
                </button>
              </Link>

              <button
                onClick={() => {
                  setShowAdditionalSection(false);
                }}
                className="btn btn-outline"
              >
                <span className="">থাকুন</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsForLearn;
