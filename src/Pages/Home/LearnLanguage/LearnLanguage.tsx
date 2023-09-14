import { FaGraduationCap } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import CountUp from "react-countup";
import { useState } from "react";

import { ImBooks } from "react-icons/im";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function LearnLanguage() {
  const [counton] = useState(true);

  return (
    <>
      
        <div className="py-5 mt-12">
          <SectionTitle
            titleLetter="Some"
            titleWord=" Information About Our Company"
          ></SectionTitle>

          {/* Learning Footer & use Icons */}

          <div className="w-full mt-10 bg-gradient-to-r from-[#359eace9] to-[#95d3a2] py-7 sm:flex text-white items-center justify-evenly">
            <div className="flex flex-col text-center text-3xl ">
              {/* <h3>3000+</h3> */}
              <h1>
                {counton && (
                  <CountUp start={0} end={3000} duration={2} separator="," />
                )}
                +
              </h1>

              <div className="flex text-xl items-center justify-center">
                <BsPeople className="m-2" />
                <p>Learners</p>
              </div>
            </div>
            <hr className=" bg-white sm:w-1 h-5 md:h-8 lg:h-12" />
            <div className="flex flex-col text-center text-3xl sm:py-0 py-2">
              <h1>
                {counton && (
                  <CountUp start={0} end={4500} duration={2} separator="," />
                )}
                +
              </h1>

              <div className="flex text-xl items-center justify-center">
                <ImBooks className="m-2" />
                <p>Online Books</p>
              </div>
            </div>
            <hr className=" bg-white sm:w-1 h-5 md:h-8 lg:h-12" />
            <div className="flex flex-col text-center text-3xl">
              <h1>
                {counton && (
                  <CountUp start={0} end={23} duration={2} separator="," />
                )}
                +
              </h1>

              <div className="flex text-xl items-center justify-center">
                <FaGraduationCap className="m-2" />
                <p>Instuctors</p>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default LearnLanguage;
