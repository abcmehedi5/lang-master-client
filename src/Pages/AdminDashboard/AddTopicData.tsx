/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
// import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

type Lesson = {
  lessonNumber: string;
  lessonTitle: string;
  points: string;
  quiz: QuizQuestion[];
};

type FormValue = {
  _id: number;
  unit: string;
  topic: string;
  totalLessons: string;
  lessons: Lesson[];
};

const AddTopicData: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    getValues, 
    setValue, 
  } = useForm<FormValue>({
    defaultValues: {
      _id: 1,
      unit: "",
      topic: "",
      totalLessons: "",
      lessons: [
        {
          lessonNumber: "",
          lessonTitle: "",
          points: "",
          quiz: [
            {
              question: "",
              options: ["", "", ""],
              correctAnswer: "",
            },
          ],
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      // Send data to the server using axios or your preferred HTTP library
      const response = await axios.post("http://localhost:5000/learning-questions/questions", data);
      if (response.status === 200) {
        // Successfully saved data
        console.log("তথ্যটি সফলভাবে সংরক্ষিত হয়েছে!");
      } else {
        console.error("তথ্য সংরক্ষণে সমস্যা হয়েছে");
      }
    } catch (error) {
      console.error("তথ্য সংরক্ষণে সমস্যা:", error);
    }
    console.log(data);
  };

  const addLesson = () => {
    // যখন "পাঠ যোগ করুন" বাটনটি ক্লিক হয়, তখন একটি নতুন খালি পাঠ যোগ হয়
    const newLesson: Lesson = {
      lessonNumber: "",
      lessonTitle: "",
      points: "",
      quiz: [
        {
          question: "",
          options: ["", "", ""],
          correctAnswer: "",
        },
      ],
    };

    const updatedLessons = [...getValues("lessons"), newLesson];
    setValue("lessons", updatedLessons);
  };

  const addQuizQuestion = (lessonIndex: number) => {
    // একটি নির্দিষ্ট পাঠের জন্য একটি নতুন খালি কুইজ প্রশ্ন যোগ করুন
    const newQuestion: QuizQuestion = {
      question: "",
      options: ["", "", ""],
      correctAnswer: "",
    };

    const updatedLessons = getValues("lessons").map((lesson, index) =>
      index === lessonIndex
        ? {
          ...lesson,
          quiz: [...lesson.quiz, newQuestion],
        }
        : lesson
    );

    setValue("lessons", updatedLessons);
  };

  return (
    <div className="container mx-auto border p-5 rounded-lg m-4 lg:m-10 lg:p-10 shadow-lg bg-slate-100">
      <h2 className="text-center font-semibold text-2xl text-[#21bbd3]">
        টপিক তথ্য যোগ করুন
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* unit */}
        <div>
          <label htmlFor="unit" className="block form-control text-sm font-medium">
            ইউনিট
          </label>
          <input
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            id="unit"
            {...register("unit")}
          />
        </div>

        {/* topic */}
        <div>
          <label htmlFor="topic" className="block form-control text-sm font-medium">
            টপিক
          </label>
          <input
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            id="topic"
            {...register("topic")}
          />
        </div>

        {/* totalLessons */}
        <div>
          <label htmlFor="totalLessons" className="block form-control text-sm font-medium">
            মোট পাঠ
          </label>
          <input
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            id="totalLessons"
            {...register("totalLessons")}
          />
        </div>

        {/* lessons */}
        {getValues("lessons").map((lesson, lessonIndex) => (
          <div key={lessonIndex}>
            <h3 className="text-sm font-medium">পাঠ {lessonIndex + 1}</h3>
            <div>
              <label htmlFor={`lessons.${lessonIndex}.lessonNumber`} className="block form-control text-sm font-medium">
                পাঠ নম্বর
              </label>
              <input
                className="w-full border rounded-md p-2 mt-2 input input-bordered"
                id={`lessons.${lessonIndex}.lessonNumber`}
                {...register(`lessons.${lessonIndex}.lessonNumber`)}
              />
            </div>

            {/* lessonTitle */}
            <div>
              <label htmlFor={`lessons.${lessonIndex}.lessonTitle`} className="block form-control text-sm font-medium">
                পাঠের শিরোনাম
              </label>
              <input
                className="w-full border rounded-md p-2 mt-2 input input-bordered"
                id={`lessons.${lessonIndex}.lessonTitle`}
                {...register(`lessons.${lessonIndex}.lessonTitle`)}
              />
            </div>

            {/* points */}
            <div>
              <label htmlFor={`lessons.${lessonIndex}.points`} className="block form-control text-sm font-medium">
                মূল্যায়ন মার্ক
              </label>
              <input
                className="w-full border rounded-md p-2 mt-2 input input-bordered"
                id={`lessons.${lessonIndex}.points`}
                {...register(`lessons.${lessonIndex}.points`)}
              />
            </div>

            {/* quiz */}
            {lesson.quiz.map((question, questionIndex) => (
              <div key={questionIndex}>
                <h4 className="text-sm font-medium">কুইজ প্রশ্ন {questionIndex + 1}</h4>
                <div>
                  <label
                    htmlFor={`lessons.${lessonIndex}.quiz.${questionIndex}.question`}
                    className="block form-control text-sm font-medium"
                  >
                    প্রশ্ন
                  </label>
                  <input
                    className="w-full border rounded-md p-2 mt-2 input input-bordered"
                    id={`lessons.${lessonIndex}.quiz.${questionIndex}.question`}
                    {...register(`lessons.${lessonIndex}.quiz.${questionIndex}.question`)}
                  />
                </div>

                {/* Options */}
                <div className="flex gap-3">
                  {question.options.map((_, optionIndex) => (
                    <div key={optionIndex} className="w-1/3">
                      <div className="">
                        <label
                          htmlFor={`lessons.${lessonIndex}.quiz.${questionIndex}.options.${optionIndex}`}
                          className="block form-control text-sm font-medium"
                        >
                          বিকল্প {optionIndex + 1}
                        </label>
                        <input
                          className="w-full border rounded-md p-2 mt-2 input input-bordered"
                          id={`lessons.${lessonIndex}.quiz.${questionIndex}.options.${optionIndex}`}
                          {...register(`lessons.${lessonIndex}.quiz.${questionIndex}.options.${optionIndex}`)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Correct Answer */}
                <div>
                  <label
                    htmlFor={`lessons.${lessonIndex}.quiz.${questionIndex}.correctAnswer`}
                    className="block form-control text-sm font-medium"
                  >
                    সঠিক উত্তর
                  </label>
                  <input
                    className="w-full border rounded-md p-2 my-3 input input-bordered"
                    id={`lessons.${lessonIndex}.quiz.${questionIndex}.correctAnswer`}
                    {...register(`lessons.${lessonIndex}.quiz.${questionIndex}.correctAnswer`)}
                  />
                </div>
              </div>
            ))}

            {/* Add Quiz Question Button */}
            <button
              type="button"
              onClick={() => addQuizQuestion(lessonIndex)}
              className="btn hover:bg-[#088395] bg-slate-500 text-white w-full px-4 py-2 rounded-md font-semibold"
            >
              কুইজ প্রশ্ন যোগ করুন
            </button>
          </div>
        ))}

        {/* Add Lesson Button */}
        <button
          type="button"
          onClick={addLesson}
          className="btn hover:bg-[#088395] bg-gray-600 text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          পাঠ যোগ করুন
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn bg-[#088395] hover:bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          টপিক তথ্য সংরক্ষণ করুন
        </button>
      </form>
    </div >
  );
};

export default AddTopicData;
