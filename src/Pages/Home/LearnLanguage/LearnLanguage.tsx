import { BiBriefcase } from "react-icons/bi";
import { FaBook, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import { BsPeople } from "react-icons/bs";
import { GiMeepleGroup } from "react-icons/gi";
import Lottie from "lottie-react-web";
import learnOne from "../../../../public/learnLanguage/learnOne.json"
import learnTwo from "../../../../public/learnLanguage/learnTwo.json"
import learnThree from "../../../../public/learnLanguage/learnThree.json"
import learnFour from "../../../../public/learnLanguage/learnFour.json"

function LearnLanguage() {
 const learning = [learnOne, learnTwo, learnThree, learnFour];

  return (
    <div className="my-4 shadow-lg container mx-auto">
      {/* Group button */}
      <div className="flex border bg-slate-100 mx-auto justify-center md:w-1/2 w-full rounded-3xl text-center my-6 ">
        <Link
          to="/"
          className="hover:bg-[#047e65] hover:text-white items-center p-4 w-full rounded-3xl flex gap-2"
        >
          <FaBook />
          Learn & Get Certificates
        </Link>
        <Link
          to="/about"
          className="hover:bg-[#047e65] hover:text-white p-4 rounded-3xl w-full flex gap-2 items-center"
        >
          <BiBriefcase /> Build Your Career
        </Link>

      </div>
      <h2 className="lg:text-5xl text-xl font-bold text-center">
        Learn a new Language
      </h2>

      {/* search bar */}
      <SearchBar />

      <div className="grid lg:grid-cols-4 lg:gap-4 ">
        {learning.map((learn, index) => (
          <div className=" mt-4 " key={index}>
            <Lottie
              options={{
                animationData: learn,
                loop: true,
                autoplay: true,
              }}
            />
          </div>
        ))}
      </div>



      {/* Learning Footer & use Icons */}

      <div className="w-full bg-[#0A4D68] py-4 flex flex-wrap text-white items-center lg:gap-5 p-2 lg:text-xl justify-center">

        <div className="flex items-center px-3">
          <BsPeople className="m-2" />
          <h3>30 Million + Learners</h3>
        </div>
        <hr className=" bg-white w-1 h-5 md:h-8 lg:h-12" />
        <div className="flex items-center px-3">
          <FaGraduationCap className="m-2" />
          <h3>6 Million + Graduates</h3>
        </div>
        <hr className=" bg-white w-1 h-5 md:h-8 lg:h-12" />
        <div className="flex items-center px-3">
          <GiMeepleGroup className="m-2" />
          <h3>195 Countries</h3>
        </div>
      </div>
    </div>
  );
}

export default LearnLanguage;
