import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const AddUnit = () => {
  const [unit, setUnit] = useState({});
  const [lesson, setLesson] = useState({});
  const [quiz, setQuiz] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  // unit data
  const handleUnitChange = (e: any) => {
    const newUnit = { ...unit };
    newUnit[e.target.name] = e.target.value;
    setUnit(newUnit);
  };

  // lesson data

  const handleLessonChange = (e: any) => {
    const newLesson = { ...lesson };
    newLesson[e.target.name] = e.target.value;
    setLesson(newLesson);
  };

  // lessons data
  const handleQuizChange = (e: any) => {
    const newquiz = { ...quiz };
    newquiz[e.target.name] = e.target.value;
    setQuiz(newquiz);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axiosSecure.post("/unitMake/createUnit", {
      unit: unit,
      lessons: [lesson],
      quiz: [quiz],
    });
    console.log(res);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>Unit</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="unit"
          onChange={handleUnitChange}
        />

        <label>topic</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="topic"
          onChange={handleUnitChange}
        />

        <label>Total Lessons</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="totalLessons"
          onChange={handleUnitChange}
        />

        <label>lesson Number</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="lessonNumber"
          onChange={handleLessonChange}
        />

        <label>lesson Title</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="lessonTitle"
          onChange={handleLessonChange}
        />
        <label>Points</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="points"
          onChange={handleLessonChange}
        />

        <label>Question</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="question"
          onChange={handleQuizChange}
        />

        <label>Options</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="options"
        />
        <label>Options</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="options"
        />
        <label>Options</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="options"
        />
        <label>Options</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="options"
        />

        <label>Correct Answer</label>
        <input
          className="w-full border rounded-md p-2 mt-2 input input-bordered"
          name="correctAnswer"
          onChange={handleQuizChange}
        />

        <input className="defaultBtn" type="submit" />
      </form>
    </div>
  );
};

export default AddUnit;
