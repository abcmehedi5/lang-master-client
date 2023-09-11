import { FaGraduationCap } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { ImBooks } from "react-icons/im";

function LearnLanguage() {
  const [counton, setCountOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCountOn(true)}
      onExit={() => setCountOn(false)}
    >
      <div className="py-5 ">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-9">
          Some Information About Our Company
        </h1>

        {/* Learning Footer & use Icons */}

        <div className="w-full bg-gradient-to-r from-[#359eace9] to-[#95d3a2] py-7 flex text-white items-center justify-evenly">
          <div className="flex flex-col text-center text-3xl">
            {/* <h3>3000+</h3> */}
            <h1>
              {counton && (
                <CountUp start={0} end={3000} duration={2} separator="," />
              )}
              +
            </h1>

            <div className="flex text-xl">
              <BsPeople className="m-2" />
              <p>Learners</p>
            </div>
          </div>
          <hr className=" bg-white w-1 h-5 md:h-8 lg:h-12" />
          <div className="flex flex-col text-center text-3xl">
            <h1>
              {counton && (
                <CountUp start={0} end={4500} duration={2} separator="," />
              )}
              +
            </h1>

            <div className="flex text-xl">
              <ImBooks className="m-2" />
              <p>Online Books</p>
            </div>
          </div>
          <hr className=" bg-white w-1 h-5 md:h-8 lg:h-12" />
          <div className="flex flex-col text-center text-3xl">
            <h1>
              {counton && (
                <CountUp start={0} end={23} duration={2} separator="," />
              )}
              +
            </h1>

            <div className="flex text-xl">
              <FaGraduationCap className="m-2" />
              <p>Instuctors</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}

export default LearnLanguage;
