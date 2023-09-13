import { Link, useLoaderData } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import { useSingleLearningData } from "../../../hooks/useLearnData/singleLearnData";


const AddLesson = () => {

  const question: any = useLoaderData();

 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [quizes, setQuizes] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    },
  ]);


  
  console.log(question)

  type Inputs = {
    example: string;
    lessonNumber: string;
    lessonTitle: string;
    points: string;
    quiz: string;
  };


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formattedData = {
        lessonNumber: data.lessonNumber,
        lessonTitle: data.lessonTitle,
        points: data.points,
        quiz: quizes,
      };

      const response = await axios.post(
        `http://localhost:5000/learning-questions/add-lesson/${question._id}`,
        formattedData
      );
      Swal.fire({
        icon: "success",
        title: 'added 1 lesson',
        showConfirmButton: true,
        timer: 1500,
      });
      console.log("Lesson added:", response.data);
    } catch (error) {
      console.error("Error adding lesson:", error);
    }
  };


  const onQuizChange = (index, field, value) => {
    setQuizes((prevQuizes) => {
      const newQuizes = [...prevQuizes];
      newQuizes[index][field] = value;
      return newQuizes;
    });
  };

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-3">Add Lessons</h2>
      <div className="join shadow-lg bg-slate-100 p-5 w-full text-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-3 gap-3">
            <input
              className="border-2 p-3 mx-3 w-full"
              placeholder="Lesson Number"
              {...register("lessonNumber", { required: true })}
            />

            {errors.lessonNumber && (
              <span className="text-red-500">This field is required</span>
            )}

            <input
              className="border-2 p-3 mx-3 w-full"
              placeholder="Lesson Title"
              {...register("lessonTitle", { required: true })}
            />

            {errors.lessonTitle && (
              <span className="text-red-500">This field is required</span>
            )}

            <input
              className="border-2 p-3 mx-3 w-full"
              placeholder="Points Number"
              {...register("points", { required: true })}
            />
          </div>

          {errors.lessonTitle && (
            <span className="text-red-500">This field is required</span>
          )}

          
          {/* Quiz Input */}
          {quizes.map((quiz, index) => (
            <div key={index}>
              <input
                className="border-2 p-3 mx-3 w-full mt-3"
                placeholder={`Quiz question ${index + 1}`}
                value={quiz.question}
                onChange={(e) =>
                  onQuizChange(index, "question", e.target.value)
                }
              />

              <div className="grid grid-cols-2 gap-3 my-3">
                {quiz.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      className="border-2 p-3 mx-3 w-full"
                      placeholder={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(e) =>
                        onQuizChange(index, "options", [
                          ...quiz.options.slice(0, optionIndex),
                          e.target.value,
                          ...quiz.options.slice(optionIndex + 1),
                        ])
                      }
                    />
                  </div>
                ))}
              </div>

              <input
                className="border-2 p-3 mx-3 w-full"
                placeholder="Correct Answer"
                value={quiz.correctAnswer}
                onChange={(e) =>
                  onQuizChange(index, "correctAnswer", e.target.value)
                }
              />
            </div>
          ))}
          {errors.quiz && (
            <span className="text-red-500">This field is required</span>
          )}

          <input className="btn mt-3 btn-primary" type="submit" />
        </form>
      </div>

      {/* lessons list */}

      <div>
        <h1 className="text-xl font-bold mb-6">Lessons</h1>
        <div className="overflow-x-auto border-2 rounded">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>#</th>
                <th>Lessons Title</th>
                <th>Lesson Number</th>
                <th>Total Quizs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Check if boughtBooks is defined before mapping */}
              {question?.lessons?.map((lesson: any, index: any) => (
                <tr key={lesson._id}>
                  <th>{index + 1}</th>
                  <th>{lesson?.lessonTitle}</th>
                  <th>{lesson?.lessonNumber}</th>
                  <th>{lesson?.quiz?.length}</th>
                  <th>
                    <Link to={`/admin-dashboard/add-Lessons/add-quiz/${question._id}`}>
                      <button className="btn btn-primary">Add Quiz</button>
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddLesson;
