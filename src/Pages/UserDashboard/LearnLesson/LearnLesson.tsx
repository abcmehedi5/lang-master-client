import { useState, useEffect } from "react";
import Lottie from "lottie-react-web";
import lessonAnimation from "./../../../assets/lessonAnimation.json";
import { useParams } from "react-router-dom";
import { LearnDataItem } from "../Learning/Learning";

const LearnLesson = () => {
  const { id } = useParams<{ id: string }>();
  const [lessonsData, setLessonsData] = useState<LearnDataItem[]>([]);
  const [activeLesson, setActiveLesson] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/learn.json`)
      .then((response) => response.json())
      .then((data: LearnDataItem[]) => {
        const selectedItem = data.find((item) => item._id === id);
        setLessonsData(selectedItem.lessons);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  console.log(lessonsData);

  // handle lesson button click
  const handleLessonClick = (lessonNumber: string) => {
    setActiveLesson((prevActive) =>
      prevActive === lessonNumber ? null : lessonNumber
    );
  };

  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div>
          <div>
            <Lottie
              options={{
                animationData: lessonAnimation,
                loop: true,
                autoplay: true,
              }}
              width={400}
              height={400}
            />
          </div>
          {/* lesson content here */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {lessonsData.map((lesson) => (
              <div key={lesson.lessonNumber} className="relative inline-block">
                <div className="p-[6px] border-[6px] border-[#096379aa] rounded-full">
                  <button
                    className={`bg-[#096279] text-white h-28 w-28 rounded-full shadow-2xl ${
                      activeLesson === lesson.lessonNumber ? "bg-[#096279]" : ""
                    }`}
                    onClick={() => handleLessonClick(lesson.lessonNumber)}
                  >
                    পাঠ - {lesson.lessonNumber}
                  </button>
                </div>
                {activeLesson === lesson.lessonNumber && (
                  <button
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white px-4 py-2 rounded opacity-100 scale-100 transition-all duration-300 ease-in-out`}
                  >
                    Another Button
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnLesson;
