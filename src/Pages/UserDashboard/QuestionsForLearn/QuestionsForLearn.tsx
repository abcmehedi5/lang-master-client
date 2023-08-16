import React from "react";
import { useParams } from "react-router-dom";
import { Lesson } from "../../../hooks/useLearnData/LearnDataItem";
import useLearnData from "../../../hooks/useLearnData/useLearnData";

const QuestionsForLearn: React.FC = () => {
  const { id, lessonNumber } = useParams<{
    id: string;
    lessonNumber: string;
  }>();
  const { allLearnData, loading } = useLearnData(); // Use your custom hook here

  if (loading) {
    return <p>Loading...</p>;
  }

  const selectedUnit = allLearnData.find((unit) => unit._id === id);
  if (!selectedUnit) {
    return <p>Unit not found.</p>;
  }

  const selectedLesson: Lesson | undefined = selectedUnit.lessons.find(
    (lesson) => lesson.lessonNumber === lessonNumber
  );

  if (!selectedLesson) {
    return <p>Lesson not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">
        {selectedLesson.lessonTitle}
      </h2>
      <div className="bg-gray-200 h-4 relative">
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <ul>
        {selectedLesson.quiz.map((question, index) => (
          <li key={index} className="mb-6">
            <p className="text-lg font-medium mb-2">{question.question}</p>
            <ul className="mb-6">
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className="bg-white border rounded-lg p-4 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Previous
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionsForLearn;
