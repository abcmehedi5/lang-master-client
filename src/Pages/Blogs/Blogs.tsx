import BlogMainContain from "./BlogMainContain";
import BlogRightSidebar from "./BlogRightSidebar";
import useBlogData from "../../hooks/useBlogData";
// import BlogLeftSidebar from "./BlogLeftSidebar";
import BlogPost from "./BlogPost";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Blogs = () => {
  const { blog } = useBlogData();
  const { user } = useContext(AuthContext)
  const myBlogs = blog.filter(item => item.email === user?.email)


  return (
    <>
      <div className="md:flex gap-4 px-4 md:px-10 my-3">
        <div className="md:w-[70%]">
          <BlogPost></BlogPost>
          <BlogMainContain />
        </div>
        <div className="md:w-[30%] mx-auto md:sticky top-0 h-full">
          <h1 className="text-center text-4xl font-semibold mt-6 rounded-xl py-5 bg-base-300">My Blogs</h1>
          <BlogRightSidebar items={myBlogs} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
