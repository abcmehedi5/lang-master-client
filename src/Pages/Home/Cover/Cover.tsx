import React from "react";
import "./Cover.css";
import shap1 from "../../../../public/shape-1.svg";
import shap2 from "../../../../public/shape-2.svg";
import shap3 from "../../../../public/shape-3.svg";
import useLeaderBoard from "../../../hooks/useLeaderBoardData/useLeaderBoard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";

interface TUserPoints {
  email: string;
  image: string;
  name: string;
  phoneNumber: string;
  role: string;
  score: number;
  unit: string[];
  _id: string;
}

const Cover: React.FC = () => {
  const { allLeaderBoardData: usersPoint } = useLeaderBoard();

  return (
    <div className="relative bg-gradient-to-br from-[#95d3a2] to-[#359fac] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-white/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-white/15 rounded-full blur-3xl top-1/2 -right-40 animate-pulse delay-1000"></div>
        <div className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Shapes with Enhanced Animation */}
      <div className="absolute animate-float h-16 w-16 md:h-20 md:w-20 opacity-70 hidden md:block right-10 bottom-32 hover:scale-110 transition-transform duration-300">
        <img src={shap1} alt="Decorative shape" className="drop-shadow-lg" />
      </div>
      <div className="absolute animate-float-delayed hidden md:block top-10 left-[45%] h-16 w-16 md:h-20 md:w-20 opacity-60 hover:scale-110 transition-transform duration-300">
        <img src={shap2} alt="Decorative shape" className="drop-shadow-lg" />
      </div>
      <div className="absolute animate-float hidden md:block top-24 left-[9%] h-16 w-16 md:h-20 md:w-20 opacity-60 hover:scale-110 transition-transform duration-300">
        <img src={shap3} alt="Decorative shape" className="drop-shadow-lg" />
      </div>

      <div className="relative z-10 banner md:flex items-center justify-between md:py-0 pb-20 md:min-h-[90vh] md:px-7 gap-12 lg:gap-20 max-w-7xl mx-auto pt-16 px-4">
        
        {/* Hero Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative group">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            
            {/* Main Image Container */}
            <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px] rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co/s1vDwGW/banner-img-1.png"
                alt="English learning illustration"
                loading="lazy"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Floating Elements Around Image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-white rounded-full animate-pulse opacity-70"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left mt-12 md:mt-0 order-2 md:order-1">
          
          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-white drop-shadow-lg">
                Improve your
              </span>
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent animate-pulse">
                English
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl">
              Master English with our <span className="font-semibold text-yellow-300">interactive</span> learning platform. 
              Track your <span className="font-semibold text-yellow-300">progress</span> and achieve your 
              <span className="font-semibold text-yellow-300"> goals</span> faster than ever.
            </p>
          </div>

          {/* Social Proof Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center justify-center md:justify-start gap-4">
              {/* User Avatars */}
              <div className="flex -space-x-2">
                {usersPoint.slice(0, 3).map((userPoint: TUserPoints, index: number) => (
                  <div 
                    key={userPoint._id}
                    className="relative group"
                    style={{ zIndex: 10 - index }}
                  >
                    <img
                      className="w-12 h-12 rounded-full border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      src={userPoint?.image}
                      alt={`${userPoint.name} profile`}
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
                
                {/* Plus indicator */}
                <div className="w-12 h-12 rounded-full bg-white/20 border-3 border-white flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-bold text-sm">+</span>
                </div>
              </div>

              {/* Trust Text */}
              <div className="flex flex-col">
                <p className="text-white font-medium">
                  <span className="text-yellow-300 font-bold">1000+</span> learners trust us
                </p>
                <Link to="/user-dashboard/leader-board" className="group">
                  <span className="flex items-center gap-1 text-yellow-300 hover:text-yellow-200 transition-colors duration-300 text-sm font-medium">
                    View leaderboard
                    <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <Link to="/user-dashboard/learning" className="inline-block">
              <WhiteButton 
                variant="default" 
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <AiOutlineArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </WhiteButton>
            </Link>
            
            <p className="text-gray-200 text-sm">
              No credit card required • Start learning immediately
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent"></div>
    </div>
  );
};

export default Cover;