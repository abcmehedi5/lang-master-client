import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useBlogData from "../../../hooks/useBlogData";
import Loading from "../../../Components/Loading";
import "./HomepageBlog.css";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, Eye } from "lucide-react";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const HomepageBlog = () => {
  const { blog, loading } = useBlogData();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="mt-20">
      <div className="pb-4 mb-6">
        <SectionTitle titleLetter="Recent" titleWord="Blog Posts" />
      </div>

      {/* Blog card starts */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-10">
        {blog.slice(0, 3).map((item: any, index: number) => (
          <div
            key={item._id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                className="h-[220px] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.image}
                alt={item.title}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating category tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white shadow-lg">
                Blog Post
              </div>

              {/* Views badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>1.2k</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Meta info */}
              <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{item?.uploadedtime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#359fac] transition-colors duration-300 line-clamp-2">
                {item?.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.description.slice(0, 120)} ...
                <Link
                  className="text-xs underline text-[#359fac] hover:text-[#95d3a2] transition-colors font-medium ml-1"
                  to={`/singleBlogCard/${item._id}`}
                >
                  see more
                </Link>
              </p>

              {/* Author info and button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#95d3a2] to-[#359fac] rounded-full flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Author
                  </span>
                </div>

                {/* Enhanced details button */}
                <Link to={`/singleBlogCard/${item._id}`}>
                  <WhiteButton
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      Details
                      <MdOutlineKeyboardArrowRight className="w-4 h-4" />
                    </span>
                  </WhiteButton>
                </Link>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-1 bg-gradient-to-r from-[#95d3a2] to-[#359fac] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <Link to="/blog">
          <button className="border border-primaryBg px-4 py-2 rounded-lg">
            View All Blogs{" "}
            <MdOutlineKeyboardArrowRight className="inline-block font-bold" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomepageBlog;
