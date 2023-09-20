import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

interface Inputs {
  question: string;
  option1: string;
  option: string;
  option2: string;
  option3: string;
  option4: string;
  correctAnswer: string;
}

interface AddQuizModalProps {
  closeModal: () => void;
  lessonId: number;
}

const AddQuizModal: React.FC<AddQuizModalProps> = ({
  closeModal,
  lessonId,
}) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const [axiosSecure] = useAxiosSecure();

  const [quizzes] = useState([
    {
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    },
  ]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const newQuizData = {
        question: data.question,
        options: [data.option1, data.option2, data.option3, data.option4],
        correctAnswer: data.correctAnswer,
      };

      const response = await axiosSecure.post(`/add-quiz/${lessonId}`, {
        newQuiz: newQuizData,
      });

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Quiz added successfully",
          showConfirmButton: true,
          timer: 1500,
        });
      }
    } catch (error) {
      console.error("Error adding quiz:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title> AddQuizes | Admin dashboard | Lang Master </title>
      </Helmet>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-70"></div>
        <div className="bg-white p-6 rounded-lg shadow-md relative md:w-1/2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold mb-3">Add Quiz</h2>
            <button className="px-4 py-2 ml-4 border" onClick={closeModal}>
              <AiOutlineCloseCircle className="text-2xl" />
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-3">
              <label className="mb-4">Question:</label>
              <input
                {...register("question")} // Register the input with react-hook-form
                className="rounded-lg border-2 p-3 mx-3 w-full"
              />
            </div>
            <div className="mb-3">
              <label className="mb-4">Options:</label>
              <div className="grid grid-cols-2 gap-3">
                {quizzes.map((option) =>
                  option.options.map((subIndex) => (
                    <input
                      key={subIndex}
                      {...register("option")}
                      className="rounded-lg border-2 p-3 mx-3 w-full"
                      type="text"
                      placeholder={`Option ${subIndex + 1}`}
                    />
                  ))
                )}
              </div>
            </div>
            <div className="mb-3">
              <label className="mb-4">Correct Answer:</label>
              <input
                {...register("correctAnswer")} // Register correctAnswer with react-hook-form
                className="rounded-lg border-2 p-3 mx-3 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddQuizModal;
