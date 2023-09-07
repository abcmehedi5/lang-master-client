import { useState } from "react";

function AddUnit() {
  const [unit, setUnit] = useState("");
  const [unitTopic, setUnitTopic] = useState("");
  const [totalLesson, setTotalLesson] = useState("");
  const [lessons, setLessons] = useState([
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

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    const formData = {
      unit,
      topic: unitTopic,
      totalLesson,
      lessons,
    };
    console.log(formData);
  };

  const handleLessonChange = (e, lessonIndex, field) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex][field] = e.target.value;
    setLessons(newLessons);
  };

  const handleQuizChange = (e, lessonIndex, quizIndex, optionIndex) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].options[optionIndex] =
      e.target.value;
    setLessons(newLessons);
  };

  const handleQuizQuestionChange = (e, lessonIndex, quizIndex) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].question = e.target.value;
    setLessons(newLessons);
  };

  const handleCorrectAnswerChange = (e, lessonIndex, quizIndex) => {
    const newLessons = [...lessons];
    newLessons[lessonIndex].quiz[quizIndex].correctAnswer = e.target.value;
    setLessons(newLessons);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="unit"
          placeholder="Unit Name"
          className="input input-bordered w-full max-w-xs"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
        />
        <input
          name="topic"
          placeholder="Unit Topic"
          className="input input-bordered w-full max-w-xs"
          value={unitTopic}
          onChange={(e) => setUnitTopic(e.target.value)}
        />
        <input
          name="totalLessons"
          type="number"
          placeholder="Total Lessons"
          className="input input-bordered w-full max-w-xs"
          value={totalLesson}
          onChange={(e) => setTotalLesson(e.target.value)}
        />
      </div>

      {lessons.map((lesson, lessonIndex) => (
        <div key={lessonIndex} className="mt-4 border p-4">
          <input
            name="lessonNumber"
            type="text"
            placeholder="Lesson Number"
            className="input input-bordered w-full max-w-xs"
            value={lesson.lessonNumber}
            onChange={(e) => handleLessonChange(e, lessonIndex, "lessonNumber")}
          />
          <input
            name="lessonTitle"
            type="text"
            placeholder="Lesson Title"
            className="input input-bordered w-full max-w-xs"
            value={lesson.lessonTitle}
            onChange={(e) => handleLessonChange(e, lessonIndex, "lessonTitle")}
          />
          <input
            name="points"
            type="number"
            placeholder="Points"
            className="input input-bordered w-full max-w-xs"
            value={lesson.points}
            onChange={(e) => handleLessonChange(e, lessonIndex, "points")}
          />

          {lesson.quiz.map((quiz, quizIndex) => (
            <div key={quizIndex} className="mt-2">
              <input
                name="question"
                type="text"
                placeholder="Question"
                className="input input-bordered w-full max-w-xs"
                value={quiz.question}
                onChange={(e) =>
                  handleQuizQuestionChange(e, lessonIndex, quizIndex)
                }
              />

              {quiz.options.map((option, optionIndex) => (
                <input
                  key={optionIndex}
                  name="options"
                  type="text"
                  placeholder={`Option ${optionIndex + 1}`}
                  className="input input-bordered w-full max-w-xs"
                  value={option}
                  onChange={(e) =>
                    handleQuizChange(e, lessonIndex, quizIndex, optionIndex)
                  }
                />
              ))}

              <input
                name="correctAnswer"
                type="text"
                placeholder="Correct Answer"
                className="input input-bordered w-full max-w-xs"
                value={quiz.correctAnswer}
                onChange={(e) =>
                  handleCorrectAnswerChange(e, lessonIndex, quizIndex)
                }
              />
            </div>
          ))}
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default AddUnit;
