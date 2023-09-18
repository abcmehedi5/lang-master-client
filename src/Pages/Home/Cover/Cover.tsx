

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
    <div className="bg-gradient-to-r from-[#95d3a2] to-[#359fac]">

            </Link>
          </p>
        </div>
        <div className="text-center">
          <Link to="/user-dashboard/learning">
            <button className="button-52 mt-4  rounded-md" role="button">
              get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cover;