import React, { useState } from "react";
import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

type FormValue = {
  Level: string;
  questionData: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
};

const AddCategoryQuiz: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      Level: "easy",
      questionData: [{ question: "", options: ["", "", ""], correctAnswer: "" }],
    },
  });

  const [questionData, setQuestionData] = useState<FormValue["questionData"]>([
    { question: "", options: ["", "", ""], correctAnswer: "" },
  ]);

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      // Send data to the server using axios or your preferred HTTP library
      const response = await axios.post("http://localhost:5000/quizs/quiz", data);
      if (response.status === 200) {
        // Successfully saved data
        toast.success("Data saved successfully!");
      } else {
        toast.error("Failed to save data");
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
    console.log(data);
  };

  const addQuestion = () => {
    // Add a new empty question when the "Add Question" button is clicked
    setQuestionData([
      ...questionData,
      { question: "", options: ["", "", ""], correctAnswer: "" },
    ]);
  };

  return (
    <div className="container mx-auto border p-5 rounded-lg m-4 lg:m-10 lg:p-10 shadow-lg bg-slate-100">
      <h2 className="text-center font-semibold text-2xl text-[#21bbd3] ">
        Add Quiz
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* level */}
        <div>
          <label htmlFor="question" className="block form-control text-sm font-medium">
            Level
          </label>
          <Controller
            name="Level"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "easy", label: "Easy" },
                  { value: "normal", label: "Normal" },
                  { value: "hard", label: "Hard" },
                ]}
              />
            )}
          />
        </div>

        {/* questionData */}
        {questionData.map((question, questionIndex) => (
          <div key={questionIndex}>
            <h3 className="text-sm font-medium">Question {questionIndex + 1}</h3>
            <div>
              <label htmlFor={`questionData.${questionIndex}.question`} className="block form-control text-sm font-medium">
                Question
              </label>
              <input
                className="w-full border rounded-md p-2 mt-2 input input-bordered"
                id={`questionData.${questionIndex}.question`}
                {...register(`questionData.${questionIndex}.question`)}
              />
            </div>

            {/* Options */}
            <div className="flex gap-3">
              {question.options.map((_, optionIndex) => (
                <div key={optionIndex} className="w-1/3 ">
                  <div>
                    <label
                      htmlFor={`questionData.${questionIndex}.options.${optionIndex}`}
                      className="block form-control text-sm font-medium"
                    >
                      Option {optionIndex + 1}
                    </label>
                    <input
                      className="w-full border rounded-md p-2 mt-2 input input-bordered "
                      id={`questionData.${questionIndex}.options.${optionIndex}`}
                      {...register(`questionData.${questionIndex}.options.${optionIndex}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Correct Answer */}
            <div>
              <label htmlFor={`questionData.${questionIndex}.correctAnswer`} className="block form-control text-sm font-medium">
                Correct Answer
              </label>
              <input
                className="w-full border rounded-md p-2 mt-2 input input-bordered"
                id={`questionData.${questionIndex}.correctAnswer`}
                {...register(`questionData.${questionIndex}.correctAnswer`)}
              />
            </div>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          type="button"
          onClick={addQuestion}
          className="btn hover:bg-[#088395] bg-slate-600 text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          Add Question
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-[#088395] hover.bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          Save Quiz
        </button>
      </form>
    </div>
  );
};

export default AddCategoryQuiz;
