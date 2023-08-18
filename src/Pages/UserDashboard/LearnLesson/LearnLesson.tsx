import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import { LearnDataItem } from "../../../hooks/useLearnData/LearnDataItem";

const LearnLesson = () => {
  const { id } = useParams<{ id: string }>();
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const { allLearnData, loading } = useLearnData();

  // finding data by unit number
  const selectedLesson = allLearnData.find((item) => item._id === id);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!selectedLesson) {
    return <p>Unit not found.</p>;
  }
  const lessons: LearnDataItem["lessons"] = selectedLesson.lessons;

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
            {/* <Lottie
              options={{
                animationData: lessonAnimation,
                loop: true,
                autoplay: true,
              }}
              width={400}
              height={400}
            /> */}
          </div>

          {/* lesson content here */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {lessons.map((lesson) => (
              <div key={lesson.lessonNumber} className="relative inline-block">
                <div className="p-[6px] border-[6px] border-[#096379aa] rounded-full">
                  <button
                    className={`bg-[#096279] text-white h-28 w-28 rounded-full shadow-2xl ${activeLesson === lesson.lessonNumber ? "bg-[#096279]" : ""
                      }`}
                    onClick={() => handleLessonClick(lesson.lessonNumber)}
                  >
                    পাঠ - {lesson.lessonNumber}
                  </button>
                </div>
                {activeLesson === lesson.lessonNumber && (
                  <Link
                    to={`/learning/${id}/lesson/${lesson.lessonNumber}`}
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 px-6 py-3 bg-gradient-to-r from-teal-400 to-green-500 text-white rounded-lg shadow-md ${activeLesson === lesson.lessonNumber
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                      } transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100`}
                  >
                    শুরু করুন
                  </Link>
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
