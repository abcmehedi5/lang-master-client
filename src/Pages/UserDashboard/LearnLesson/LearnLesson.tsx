import { useLoaderData } from "react-router-dom";

const LearnLesson = () => {
  const allLessons = useLoaderData();
  console.log(allLessons);
  return (
    <div>
      <h1>lessons here</h1>
    </div>
  );
};

export default LearnLesson;
