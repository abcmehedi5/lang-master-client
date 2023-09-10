import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Cover.css";
import shap1 from "../../../../public/shape-1.svg";
import shap2 from "../../../../public/shape-2.svg";
import shap3 from "../../../../public/shape-3.svg";
import useLeaderBoard from "../../../hooks/useLeaderBoardData/useLeaderBoard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

interface CoverProps {
  // Define any props you might pass to the component
}

const Cover: React.FC<CoverProps> = () => {
  const { allLeaderBoardData: usersPoint } = useLeaderBoard();
  return (
    <div className="banner md:flex items-center justify-between bg-gradient-to-r from-[#95d3a2] to-[#359fac] relative md:py-0 pt-0 pb-16 md:h-[90vh] px-7 gap-20">
      <div className="absolute animatespin h-20 w-20 opacity-95 hidden md:block animatespin right-10 bottom-32">
        <img src={shap1} />
      </div>
      <div className="animate-updown hidden md:block absolute top-14  left-[45%] h-20 w-20 opacity-80">
        <img src={shap2} />
      </div>
      <div className="animate-updown hidden md:block absolute top-20  left-[9%] h-20 w-20 opacity-80">
        <img src={shap3} />
      </div>

      <div className="imgbanner relative md:h-[400px] h-[300px] rounded-full md:ml-[50px] md:w-1/2 ">
        <img
          className="w-full h-full"
          src="https://i.ibb.co/s1vDwGW/banner-img-1.png"
          alt=""
        />
      </div>
      <div className="md:w-1/2 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Improve your English
        </h1>
        <p className="text-xl md:text-2xl my-4 text-gray-200">One of the app's standout features is its robust <span className="text-[#eebb2e]">progress</span> tracking system, allowing learners to monitor their advancements and set achievable <span className="text-[#eebb2e]">goals</span>.</p>

        <div className="flex my-2 justify-center">
          {usersPoint.slice(0, 3).map((userPoint: any) => (
            <img
              className="w-10 h-10 rounded-full border-2"
              src={userPoint?.image}
            />
          ))}{" "}
          <p className="flex items-center gap-2 text-white md:ml-3">
            People already trusted us{" "}
            <Link to="/user-dashboard/leader-board">
              <span className="flex items-center text-[#eebb2e] underline cursor-pointer gap-1">
                view People
                <AiOutlineArrowRight />
              </span>
            </Link>
          </p>
        </div>
        <div className="text-center">
          <Link to='/user-dashboard/learning'>

          <button className="button-52 mt-4" role="button">
            get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cover;
