import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const AddQuizes = () => {
  const { register, handleSubmit } = useForm();
  const [quiz, setQuiz] = useState({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // Handle form submission here
    console.log(data)
  }

  return (
    <div>
      <h2 className="text-center text-xl font-bold mb-3">Add Quiz</h2>
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
            {quiz.options.map((option, index) => (
              <input
                key={index}
                {...register(`options.${index}`)} // Register options with react-hook-form
                className="rounded-lg border-2 p-3 mx-3 w-full"
                type="text"
                placeholder={`Option ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="mb-4">Correct Answer:</label>
          <input
            {...register("correctAnswer")} // Register correctAnswer with react-hook-form
            className="rounded-lg border-2 p-3 mx-3 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuizes;
