import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

interface Lesson {
  lessonNumber: string;
  lessonTitle: string;
  points: string;
  quiz: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

function AddUnit() {
  const [axiosSecure] = useAxiosSecure();
  const [unit, setUnit] = useState("");
  const [unitTopic, setUnitTopic] = useState("");
  const [totalLessons, setTotalLessons] = useState("");
  const [refetch] = useLearnData();
  const [lessons, setLessons]: any = useState([
    {
      lessonNumber: "",
      lessonTitle: "",
      points: "",
      quiz: [
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    },
  ]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = {
      unit,
      topic: unitTopic,
      totalLessons,
      lessons,
    };
    try {
      const response = await axiosSecure.post(
        "/learning-questions/questions",
        formData
      );

      if (response.status === 200) {
        // Success: refetch, show success message, and reset input fields
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          text: "Added one unit",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the input fields
        setUnit("");
        setUnitTopic("");
        setTotalLessons("");
        setLessons([
          {
            lessonNumber: "",
            lessonTitle: "",
            points: "",
            quiz: [
              {
                question: "",
                options: ["", "", "", ""],
                correctAnswer: "",
              },
            ],
          },
        ]);
      } else {
        // Handle non-200 response status (e.g., server error)
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      // Handle errors (e.g., network issues, Axios error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later🙂",
      });
      console.error("Error making post request:", error);
    }
  };

  const handleLessonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    lessonIndex: any,
    field: keyof Lesson
  ) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex][field] = e.target.value;
    setLessons(newLessons);
  };

  const handleQuizChange = (
    e: any,
    lessonIndex: number,
    quizIndex: number,
    optionIndex: number
  ) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].options[optionIndex] =
      e.target.value;
    setLessons(newLessons);
  };

  const handleQuizQuestionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    lessonIndex: number,
    quizIndex: number
  ) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].question = e.target.value;
    setLessons(newLessons);
  };

  const handleCorrectAnswerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    lessonIndex: number,
    quizIndex: number
  ) => {
    const newLessons: any = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].correctAnswer = e.target.value;
    setLessons(newLessons);
  };

  return (
    <>
      <Helmet>
        <title> Add Units | Admin dashboard | Lang Master </title>
      </Helmet>

      <div className="px-4 py-8 md:px-20 md:py-16">
        <SectionTitle titleLetter="Add " titleWord="Units"></SectionTitle>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="md:flex justify-evenly  gap-2">
            <input
              name="unit"
              placeholder="Unit Name"
              className="input input-bordered w-full max-w-xs bg-[#e8f0fe]"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            <input
              name="topic"
              placeholder="Unit Topic"
              className="input input-bordered w-full max-w-xs bg-[#e8f0fe] md:my-0 my-2"
              value={unitTopic}
              onChange={(e) => setUnitTopic(e.target.value)}
            />
            <input
              name="totalLessons"
              type="number"
              placeholder="Total Lessons"
              className="input input-bordered w-full max-w-xs bg-[#e8f0fe]"
              value={totalLessons}
              onChange={() => setTotalLessons(lessons.length)}
            />
          </div>

          {lessons.map((lesson: any, lessonIndex: any) => (
            <div key={lessonIndex} className="mt-4 border-2 rounded-md p-4">
              <input
                name="lessonNumber"
                type="text"
                placeholder="Lesson Number"
                className="input input-bordered w-full bg-[#e8f0fe]"
                value={lesson.lessonNumber}
                onChange={(e) =>
                  handleLessonChange(e, lessonIndex, "lessonNumber")
                }
              />
              <input
                name="lessonTitle"
                type="text"
                placeholder="Lesson Title"
                className="input input-bordered w-full mt-2 bg-[#e8f0fe]"
                value={lesson.lessonTitle}
                onChange={(e) =>
                  handleLessonChange(e, lessonIndex, "lessonTitle")
                }
              />
              <input
                name="points"
                type="number"
                placeholder="Points"
                className="input input-bordered w-full mt-2 bg-[#e8f0fe]"
                value={lesson.points}
                onChange={(e) => handleLessonChange(e, lessonIndex, "points")}
              />

              {lesson.quiz.map((quiz: any, quizIndex: any) => (
                <div key={quizIndex} className="mt-2 w-full">
                  <input
                    name="question"
                    type="text"
                    placeholder="Question"
                    className="input input-bordered w-full bg-[#e8f0fe]"
                    value={quiz.question}
                    onChange={(e) =>
                      handleQuizQuestionChange(e, lessonIndex, quizIndex)
                    }
                  />

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {quiz.options.map((option: any, optionIndex: any) => (
                      <input
                        key={optionIndex}
                        name="options"
                        type="text"
                        placeholder={`Option ${optionIndex + 1}`}
                        className="input input-bordered w-full bg-[#e8f0fe]"
                        value={option}
                        onChange={(e: any) =>
                          handleQuizChange(
                            e,
                            lessonIndex,
                            quizIndex,
                            optionIndex
                          )
                        }
                      />
                    ))}
                  </div>
                  <input
                    name="correctAnswer"
                    type="text"
                    placeholder="Correct Answer"
                    className="input input-bordered w-full mt-2 bg-[#e8f0fe]"
                    value={quiz.correctAnswer}
                    onChange={(e) =>
                      handleCorrectAnswerChange(e, lessonIndex, quizIndex)
                    }
                  />
                </div>
              ))}
            </div>
          ))}

          <div className="text-center">
            <button type="submit" className="mt-4 defaultBtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddUnit;
