import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useBlogData from "../../../hooks/useBlogData";
import Loading from "../../../Components/Loading";
import "./HomepageBlog.css";
import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const HomepageBlog = () => {
  const { blog, loading } = useBlogData();

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="mt-20">
      <div className="pb-4 mb-6">
        <SectionTitle
          titleLetter="Recent "
          titleWord="Blog Posts"
        ></SectionTitle>
      </div>
      {/* blog card starts */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-10">
        {blog.slice(0, 3).map((item: any) => (
          <div className="shadow-lg rounded-lg" key={item.id}>
            <img
              className="h-[200px] w-full object-cover"
              src={item.image}
              alt=""
            />
            <div className="p-4">
              <p className="text-xs text-gray-400">{item?.uploadedtime}</p>
              <h3 className="text-xl font-bold">{item?.title}</h3>
              <p className="text-gray-500 text-sm">
                {item.description.slice(0, 120)} ...
                <Link
                  className="text-xs underline text-blue-500"
                  to={`/singleBlogCard/${item._id}`}
                >
                  see more
                </Link>
              </p>
              <Link to={`/singleBlogCard/${item._id}`}>
                <button className="details rounded px-3 py-1 text-white font-semibold bg-red-300 mt-3">
                  details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Link to="/blog">
          <button className="bg-blue-50 text-blue-500 px-5 py-2 hover:text-blue-600">
            View All Blogs{" "}
            <MdOutlineKeyboardArrowRight className="inline-block font-bold" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomepageBlog;
