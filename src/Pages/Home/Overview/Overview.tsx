import Aos from "aos";
import { useEffect } from "react";
import { BsFillBookFill } from "react-icons/bs";
import { FaBook, FaArrowRight } from "react-icons/fa";
import { TbVocabulary } from "react-icons/tb";
import { HiOutlineSparkles, HiOutlineAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";

const Overview = () => {
  const defaultLink = `/user-dashboard/`;

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const learningPaths = [
    {
      id: 1,
      title: "English Grammar",
      subtitle: "Master the Rules",
      description:
        "Complete grammar guide with interactive exercises and real-world examples",
      icon: BsFillBookFill,
      link: `${defaultLink}grammar`,
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      duration: 400,
      features: ["Interactive Lessons", "Practice Tests", "Progress Tracking"],
    },
    {
      id: 2,
      title: "Basic English",
      subtitle: "Build Strong Foundations",
      description:
        "Start your English journey with comprehensive basics and vocabulary building",
      icon: TbVocabulary,
      link: `${defaultLink}learning`,
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      duration: 800,
      features: ["Beginner Friendly", "Audio Pronunciation", "Visual Learning"],
    },
    {
      id: 3,
      title: "English Quizzes",
      subtitle: "Test Your Skills",
      description:
        "Challenge yourself with engaging quizzes and track your improvement",
      icon: HiOutlineAcademicCap,
      link: `${defaultLink}quiz`,
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      duration: 1200,
      features: ["Instant Feedback", "Difficulty Levels", "Score Analytics"],
    },
    {
      id: 4,
      title: "Learning Resources",
      subtitle: "Comprehensive Materials",
      description:
        "Access curated books and materials to accelerate your learning journey",
      icon: FaBook,
      link: `${defaultLink}books-buy`,
      color: "from-orange-600 to-orange-800",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      duration: 1600,
      features: ["Expert Content", "Downloadable", "Multi-format"],
    },
  ];

  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="relative z-10 container">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primaryBg to-secondaryBg text-white px-6 py-3 rounded-full text-lg font-bold mb-6 shadow-lg">
            <HiOutlineSparkles className="w-5 h-5" />
            Start Learning Today
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Learn English{" "}
            <span className="bg-gradient-to-r from-secondaryBg  to-primaryBg bg-clip-text text-transparent">
              Completely Free
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive learning paths designed to help you
            master English from basics to advanced levels, all at your own pace.
          </p>
        </div>

        {/* Learning Path Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {learningPaths.map((path) => {
            const IconComponent = path.icon;

            return (
              <div
                key={path.id}
                className={`group relative ${path.bgColor} rounded-2xl border-2 ${path.borderColor} hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50 hover:-translate-y-2`}
                data-aos="fade-up"
                data-aos-duration={path.duration}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute h-full inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div className="relative p-8 text-center flex flex-col h-full">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${path.color} rounded-full shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Decorative Ring */}
                    <div
                      className={`absolute inset-0 w-20 h-20 border-4 border-dashed opacity-0 group-hover:opacity-30 rounded-full group-hover:scale-125 transition-all duration-700 ${
                        path.color.includes("blue")
                          ? "border-blue-400"
                          : path.color.includes("emerald")
                          ? "border-emerald-400"
                          : path.color.includes("purple")
                          ? "border-purple-400"
                          : "border-orange-400"
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4 pb-4">
                    <div>
                      <Link to={path.link} className="group/link">
                        <h3
                          className={`text-2xl font-bold bg-gradient-to-r ${path.color} bg-clip-text text-transparent group-hover/link:scale-105 transition-transform duration-300 inline-block`}
                        >
                          {path.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 font-medium mt-1">
                        {path.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm">
                      {path.description}
                    </p>

                    {/* Feature List */}
                    <div className="space-y-2">
                      {path.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center gap-2 text-xs text-gray-600"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${path.color}`}
                          ></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link
                      to={path.link}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${path.color} text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn`}
                    >
                      Start Learning
                      <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your English Skills?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of learners who have already started their journey
              to English fluency. Choose your path and begin today!
            </p>
            {/* CTA Button */}
            <div className="pt-4">
              <Link to={defaultLink}>
                <WhiteButton
                  variant="default"
                  className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Start Your Journey
                    <FaArrowRight className="w-4 h-4" />
                  </span>
                </WhiteButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
