import { useLoaderData } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import AddQuizModal from "./AddQuizModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface LessonData {
  lessonNumber: string;
  lessonTitle: string;
  points: string;
  quiz: Quiz[];
}

interface Inputs {
  lessonNumber: string;
  lessonTitle: string;
  points: string;
  quiz: string;
}

const AddLesson: React.FC = () => {
  const question: any = useLoaderData();
  const [axiosSecure] = useAxiosSecure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [quizes, setQuizes] = useState<Quiz[]>([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedLessonId, setSelectedLessonId] = useState<number>(
  const [selectedLessonId] = useState<number>(question?.lessonNumber || null);

  // Function to open the modal and set the selected lesson ID
  const handleAddQuizClick = (lessonTitle: any) => {
    setIsModalOpen(true);
    axiosSecure
      .get("/learning-questions/addQuize", lessonTitle)
      .then((data) => {
        alert(data);
      });

    // setSelectedLessonId(lessonId);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formattedData: LessonData = {
        lessonNumber: data.lessonNumber,
        lessonTitle: data.lessonTitle,
        points: data.points,
        quiz: quizes,
      };

      const response = await axios.post(
        `/learning-questions/add-lesson/${question._id}`,
        formattedData
      );

      if (response.status === 200) {
        // Success: Show success message
        Swal.fire({
          icon: "success",
          title: "Added 1 lesson",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding lesson:", error);
    }
  };

  const onQuizChange = (index: number, field: any, value: any) => {
    setQuizes((prevQuizes) => {
      const newQuizes: any = [...prevQuizes];
      newQuizes[index][field] = value;
      return newQuizes;
    });
  };

  return (
    <div className="px-4 py-8 md:px-20 md:py-16">
      <Helmet>
        <title> Add Lessons | Admin dashboard | Lang Master </title>
      </Helmet>
      <SectionTitle titleLetter="Add " titleWord="Lessons"></SectionTitle>
      <div className="join shadow-lg bg-base-100 p-5 w-full text-center mt-10">
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
                {quiz.options.map((option: any, optionIndex: any) => (
                  <div key={optionIndex}>
                    <input
                      className="border-2 p-3 mx-3 w-full"
                      placeholder={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(e: any) =>
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

          <input className="btn mt-3 defaultBtn" type="submit" />
        </form>
      </div>

      {/* lessons list */}

      <div className="mt-10">
        <h1 className="text-xl font-bold mb-6">Lessons</h1>
        <div className="overflow-x-auto border-2 rounded">
          <table className="table table-zebra">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>#</th>
                <th>Lessons Title</th>
                <th>Lesson Number</th>
                <th>Total Quizzes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {question?.lessons?.map((lesson: any, index: any) => (
                <tr key={lesson._id}>
                  <th>{index + 1}</th>
                  <th>{lesson?.lessonTitle}</th>
                  <th>{lesson?.lessonNumber}</th>
                  <th>{lesson?.quiz?.length}</th>
                  <th>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddQuizClick(lesson.lessonTitle)}
                    >
                      Add Quiz
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <AddQuizModal
          lessonId={selectedLessonId}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AddLesson;
