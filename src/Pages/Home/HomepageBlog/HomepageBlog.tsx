import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useBlogData from "../../../hooks/useBlogData";
import Loading from "../../../Components/Loading";
import './HomepageBlog.css'

const HomepageBlog = () => {
  const { blog, loading } = useBlogData();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="my-20 h-[90vh]">
      {/* section title */}
      <div className="flex justify-between pb-10 ">
        <h1 className="font-bold text-gray-800 text-2xl">
          Most Recent Posts
        </h1>
        <button className="bg-blue-50 text-blue-500 px-5 py-2 hover:text-blue-600">
          View All Posts{" "}
          <MdOutlineKeyboardArrowRight className="inline-block font-bold" />
        </button>
      </div>
      {/* blog card starts */}
      <div className="grid-container">
        {blog.slice(0, 3).map((item, index) => (
         <div key={item.id} className={index === 0 ? 'big-item' : index === 1 ? 'small-item' : 'full-width-item'}>
          <img className="w-full h-full top-0 left-0" src={item.image} alt="" />
          <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageBlog;
