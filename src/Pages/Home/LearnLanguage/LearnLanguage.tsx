import { FaGraduationCap } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import CountUp from "react-countup";
import { useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function LearnLanguage() {
  const [counton] = useState(true);

  const data = [
    {
      icon: <BsPeople size={30} />,
      label: "Learners",
      count: 3000,
    },
    {
      icon: <ImBooks size={30} />,
      label: "Online Books",
      count: 4500,
    },
    {
      icon: <FaGraduationCap size={30} />,
      label: "Instructors",
      count: 23,
    },
  ];

  return (
    <div className="mt-20">
      <SectionTitle titleLetter="Our" titleWord="Impact" />

      <div className="mt-8 w-full bg-gradient-to-r from-[#359eace9] to-[#95d3a2] py-10 px-4 text-white rounded-lg">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 items-center justify-center max-w-6xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group transition-all duration-300"
            >
              <div className="text-4xl font-bold">
                {counton && (
                  <CountUp
                    start={0}
                    end={item.count}
                    duration={2}
                    separator=","
                  />
                )}
                +
              </div>
              <div className="flex items-center justify-center gap-2 mt-2 text-lg font-medium">
                <span className="text-white group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LearnLanguage;
