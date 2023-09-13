import { BsFillBookFill } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { TbVocabulary } from "react-icons/tb";

const Overview = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] mt-16">
        <div className="w-10/12 mx-auto">
          <h1 className="text-3xl font-bold mb-24 pt-14 text-center">
            <span className="bg-blue-950 px-5 py-2 text-gray-100">
              Amazingly
            </span>{" "}
            You can Learn English for free
          </h1>

          {/* parent div  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* child div  */}
            <div className="group bg-white px-6 py-24 rounded-lg border-b-4 border-b-blue-800 text-center relative shadow-2xl mb-14">
              {/* circle div  */}
              <div className="group-hover:border-2  border-blue-800 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-1">
                <div className="bg-blue-800 inline-block p-6 rounded-full">
                  <BsFillBookFill className="text-4xl text-white"></BsFillBookFill>
                </div>
              </div>
              <div className="space-y-2">
                <a className="text-2xl text-blue-900 hover:cursor-pointer hover:underline">
                  English Grammar
                </a>
                <p className="text-[14px] text-[#757575]">
                  Your guide to English
                </p>
                <p className="text-[14px] text-[#757575]">
                  Comprehensive Learning Approach
                </p>
              </div>
            </div>

            {/* child div  */}
            <div className="group bg-white px-6 py-24 rounded-lg border-b-4 border-b-blue-800 text-center relative shadow-2xl mb-14">
              {/* circle div  */}
              <div className="group-hover:border-2  border-blue-800 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-1">
                <div className="bg-blue-800 inline-block p-6 rounded-full">
                  <TbVocabulary className="text-4xl text-white"></TbVocabulary>
                </div>
              </div>
              <div className="space-y-2">
                <a className="text-2xl text-blue-900 hover:cursor-pointer hover:underline">
                  Basic English
                </a>
                <p className="text-[14px] text-[#757575]">
                  Foundations of Basic English
                </p>
                <p className="text-[14px] text-[#757575]">Roadmap to Fluency</p>
              </div>
            </div>

            {/* child div  */}
            <div className="group bg-white px-6 py-24 rounded-lg border-b-4 border-b-blue-800 text-center relative shadow-2xl mb-14">
              {/* circle div  */}
              <div className="group-hover:border-2  border-blue-800 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-1">
                <div className="bg-blue-800 inline-block p-6 rounded-full">
                  <FaBook className="text-4xl text-white"></FaBook>
                </div>
              </div>
              <div className="space-y-2">
                <a className="text-2xl text-blue-900 hover:cursor-pointer hover:underline">
                  English Quizzes
                </a>
                <p className="text-[14px] text-[#757575]">
                  Testing Your English Proficiency
                </p>
                <p className="text-[14px] text-[#757575]">
                  Engaging Learning Challenges
                </p>
              </div>
            </div>

            {/* child div  */}
            <div className="group bg-white px-6 py-24 rounded-lg border-b-4 border-b-blue-800 text-center relative shadow-2xl mb-14">
              {/* circle div  */}
              <div className="group-hover:border-2  border-blue-800 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-1">
                <div className="bg-blue-800 inline-block p-6 rounded-full">
                  <FaBook className="text-4xl text-white"></FaBook>
                </div>
              </div>
              <div className="space-y-2">
                <a className="text-2xl text-blue-900 hover:cursor-pointer hover:underline">
                  English Learning Book
                </a>
                <p className="text-[14px] text-[#757575]">
                  Your Path to English Mastery
                </p>
                <p className="text-[14px] text-[#757575]">
                  Enhancing English Skills
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
